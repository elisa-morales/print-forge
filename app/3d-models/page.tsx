import SearchForm from "@/app/components/SearchForm";
import ModelsGrid from "@/app/components/ModelsGrid";
import { getModels } from "@/app/lib/models";
import type { Model, ModelsPageProps } from "@/app/types";

export default async function Page({ searchParams }: ModelsPageProps) {
  const search = (await searchParams)?.search?.toLowerCase() || "";
  const sort = (await searchParams).sort?.toLowerCase() || "";
  const models = await getModels({ search, sort });

  return (
    <>
      <SearchForm search={search} />
      <ModelsGrid models={models} search={search} />
    </>
  );
}
