import ModelBrowser from "@/app/components/ModelBrowser";
import { getModels } from "@/app/lib/models";
import type { ModelsPageProps } from "@/app/types";

export default async function Page({ searchParams }: ModelsPageProps) {
  const search = (await searchParams)?.search?.toLowerCase() || "";
  const sort = (await searchParams).sort?.toLowerCase() || "";
  const models = await getModels({ search, sort });

  return <ModelBrowser models={models} search={search} />;
}
