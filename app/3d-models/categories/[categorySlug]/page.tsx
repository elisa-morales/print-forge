import ModelsGrid from "@/app/components/ModelsGrid";
import { getModelsByCategorySlug } from "@/app/lib/models";
import type { CategoryPageProps, Model } from "@/app/types";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const models: Model[] = await getModelsByCategorySlug(categorySlug);

  return <ModelsGrid title={"3D Models"} models={models} />;
}
