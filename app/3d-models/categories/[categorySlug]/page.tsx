import { notFound } from "next/navigation";
import ModelBrowser from "@/app/components/ModelBrowser";
import { getModels } from "@/app/lib/models";
import { getCategoryBySlug } from "@/app/lib/categories";
import type { CategoryPageProps, Model } from "@/app/types";

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { categorySlug } = await params;
  const search = (await searchParams)?.search?.toLowerCase() || "";
  const sort = (await searchParams)?.sort?.toLowerCase() || "";
  const models: Model[] = await getModels({ sort, categorySlug, search });
  const category = await getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return <ModelBrowser models={models} categoryName={category.name} search={search} />;
}
