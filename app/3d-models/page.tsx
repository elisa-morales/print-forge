import Form from "next/form";
import ModelsGrid from "@/app/components/ModelsGrid";
import type { ModelsPageProps } from "@/app/types";
import { getModels } from "@/app/lib/models";

export default async function Page({ searchParams }: ModelsPageProps) {
  const models = await getModels();
  const query = (await searchParams)?.query?.toLowerCase() || "";

  const filteredModels = query ? models.filter((model) => model.name.toLowerCase().includes(query) || model.description.toLowerCase().includes(query)) : models;

  return (
    <>
      <Form action='/3d-models' className='w-full mb-10 md:max-w-xl'>
        <input
          type='text'
          name='query'
          placeholder='E.g. dragon'
          autoComplete='off'
          defaultValue={query}
          className='w-full py-3 text-sm bg-transparent border-0 border-b border-foreground placeholder:text-muted focus:border-foreground focus:outline-none focus:ring-0 md:text-base'
        />
      </Form>
      <ModelsGrid title='3D Models' models={filteredModels} />
    </>
  );
}
