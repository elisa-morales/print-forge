"use client";

import { useTransition } from "react";
import SearchForm from "@/app/components/SearchForm";
import ModelsGrid from "@/app/components/ModelsGrid";
import PaginationControls from "@/app/components/PaginationControls";
import type { ModelBrowserProps } from "@/app/types";

export default function ModelBrowser({ search, models, categoryName, totalPages, currentPage }: ModelBrowserProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <SearchForm startTransition={startTransition} search={search} />
      <ModelsGrid models={models} search={search} categoryName={categoryName} startTransition={startTransition} isPending={isPending} />

      {totalPages > 1 && <PaginationControls totalPages={totalPages} currentPage={currentPage} />}
    </>
  );
}
