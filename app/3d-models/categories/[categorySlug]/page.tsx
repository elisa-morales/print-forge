import { notFound, redirect } from "next/navigation";
import { getModels, getModelCount } from "@/app/lib/models";
import { getCategoryBySlug } from "@/app/lib/categories";
import { MODELS_PER_PAGE } from "@/app/lib/consts";
import { getQueryParams } from "@/app/lib/utils";
import ModelBrowser from "@/app/components/ModelBrowser";
import type { CategoryPageProps } from "@/app/types";

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { categorySlug } = await params;
  const { search, sort, page } = getQueryParams(await searchParams);

  const models = await getModels({ search, sort, page, modelsPerPage: MODELS_PER_PAGE, categorySlug });
  const category = await getCategoryBySlug(categorySlug);

  const modelCount = await getModelCount({ search, categorySlug });
  const totalPages = Math.max(1, Math.ceil(modelCount / MODELS_PER_PAGE));

  if (!category) {
    notFound();
  }

  if (page < 1 || page > totalPages || sort === null) redirect(`/3d-models/categories/${categorySlug}`);

  return <ModelBrowser models={models} categoryName={category.name} search={search} totalPages={totalPages} currentPage={page} />;
}
