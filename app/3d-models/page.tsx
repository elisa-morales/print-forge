import SearchForm from "@/app/components/SearchForm";
import ModelsGrid from "@/app/components/ModelsGrid";
import type { Model, ModelsPageProps } from "@/app/types";
import { getModels } from "@/app/lib/models";

export default async function Page({ searchParams }: ModelsPageProps) {
  const models: Model[] = await getModels();
  const query = searchParams?.query?.toLowerCase() || "";

  const filteredModels = query ? models.filter((model) => model.name.toLowerCase().includes(query) || model.description.toLowerCase().includes(query)) : models;

  return (
    <>
      <SearchForm query={query} />
      <ModelsGrid title='3D Models' models={filteredModels} />
    </>
  );
}
