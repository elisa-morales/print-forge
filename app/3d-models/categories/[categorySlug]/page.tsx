import ModelsGrid from "@/app/components/ModelsGrid";
import { getModels } from "@/app/lib/models";
import { getCategoryBySlug } from "@/app/lib/categories";
import type { CategoryPageProps, Model } from "@/app/types";

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { categorySlug } = await params;
  const sort = (await searchParams)?.sort?.toLowerCase() || "";
  const models: Model[] = await getModels({ sort, categorySlug });
  const category = await getCategoryBySlug(categorySlug);

  return <ModelsGrid models={models} categoryName={category.name} />;
}
