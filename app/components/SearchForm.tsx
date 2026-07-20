"use client";

import { usePathname, useRouter } from "next/navigation";
import Form from "next/form";
import { SearchFormProps } from "@/app/types";

export default function SearchForm({ search, startTransition }: SearchFormProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleSearch(formData: FormData) {
    const search = formData.get("search")?.toString().trim() || "";
    const safeSearch = encodeURIComponent(search);
    const url = search ? `${pathname}?search=${encodeURIComponent(safeSearch)}` : pathname;

    startTransition(() => {
      router.push(url);
    });
  }

  return (
    <Form action={handleSearch} className='w-full mb-10 md:max-w-xl'>
      <input
        type='text'
        name='search'
        placeholder='E.g. dragon'
        autoComplete='off'
        defaultValue={search}
        className='w-full py-3 text-sm bg-transparent border-0 border-b border-foreground placeholder:text-muted focus:border-foreground focus:outline-none focus:ring-0 md:text-base'
      />
    </Form>
  );
}
