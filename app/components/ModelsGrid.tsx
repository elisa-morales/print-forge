import ModelCard from "@/app/components/ModelCard";
import { ModelsGridProps, Model } from "@/app/types";

export default function ModelsGrid({ title, models }: ModelsGridProps) {
  return (
    <div className='px-4 py-8 mx-auto md:px-0'>
      <h1 className='mb-12 text-3xl md:text-4xl lg:text-5xl'>{title}</h1>
      <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8 lg:gap-10'>
        {models.map((model: Model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
}
