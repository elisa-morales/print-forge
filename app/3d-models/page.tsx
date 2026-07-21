import ModelBrowser from "@/app/components/ModelBrowser";
import { getModels, getModelCount } from "@/app/lib/models";
import { MODELS_PER_PAGE } from "@/app/lib/consts";
import { getQueryParams } from "@/app/lib/utils";
import type { ModelsPageProps } from "@/app/types";

export default async function Page({ searchParams }: ModelsPageProps) {
  const { search, sort, page } = getQueryParams(await searchParams);

  const models = await getModels({ search, sort, page, modelsPerPage: MODELS_PER_PAGE });

  const modelCount = await getModelCount({ search });
  const totalPages = Math.ceil(modelCount / MODELS_PER_PAGE);

  return <ModelBrowser models={models} search={search} totalPages={totalPages} currentPage={page} />;
}
