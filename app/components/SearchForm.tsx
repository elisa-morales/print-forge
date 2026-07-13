import Form from "next/form";
import { SearchFormProps } from "@/app/types";

export default function SearchForm({ search }: SearchFormProps) {
  return (
    <Form action='/3d-models' className='w-full mb-10 md:max-w-xl'>
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
