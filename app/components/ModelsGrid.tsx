import ModelCard from "@/app/components/ModelCard";
import SortControls from "@/app/components/SortControls";
import LoadingUI from "@/app/components/LoadingUI";
import NotFoundUI from "@/app/components/NotFoundUI";
import { ModelsGridProps, Model } from "@/app/types";

export default function ModelsGrid({ categoryName, search, models, isPending, startTransition }: ModelsGridProps) {
  let title = "3D Models";
  if (categoryName) title = categoryName;
  if (search) title = `Search results for "${search}"`;
  if (categoryName && search) title = `Search results for "${search}" in ${categoryName}`;

  return (
    <div className='px-4 py-8 mx-auto md:px-0'>
      <div className='flex flex-col gap-2 md:flex-row md:justify-between mb-8'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <SortControls startTransition={startTransition} />
      </div>

      {isPending ? (
        <LoadingUI>Loading models...</LoadingUI>
      ) : models.length > 0 ? (
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8 lg:gap-10'>
          {models.map((model: Model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      ) : (
        <NotFoundUI title='No models found' subtitle='Try searching for something else' link_text='See all models' link_href='/3d-models' />
      )}
    </div>
  );
}
