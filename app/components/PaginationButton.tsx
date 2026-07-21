"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PaginationButtonProps } from "@/app/types";

export default function PaginationButton({ page, isActive }: PaginationButtonProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  function handlePageSort() {
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    urlSearchParams.set("page", page.toString());
    const url = `${pathname}?${urlSearchParams.toString()}`;
    router.push(url);
  }

  return (
    <button
      className={`px-3 py-1.5 text-sm border cursor-pointer ${isActive ? "text-white bg-orange-400 border-orange-400" : "border-gray-300 text-gray-700 hover:bg-gray-100"}`}
      onClick={handlePageSort}
    >
      {page}
    </button>
  );
}
