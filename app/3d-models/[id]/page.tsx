import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";
import Pill from "@/app/components/Pill";
import { getModelById } from "@/app/lib/models";
import placeholderImg from "@/public/placeholder.png";
import type { ModelDetailPageProps } from "@/app/types";

export default async function ModelDetailPage({ params }: ModelDetailPageProps) {
  const { id } = await params;
  const model = await getModelById(id);

  return (
    <div className='py-4 mx-auto md:py-8'>
      <article className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16'>
        {/* Image Section */}
        <figure className='relative overflow-hidden aspect-square'>
          <Image src={placeholderImg.src} width={placeholderImg.width} height={placeholderImg.height} alt={`3D model of ${model.name}`} className='absolute inset-0 object-cover w-full h-full' />
        </figure>

        {/* Content Section */}
        <section className='flex flex-col justify-center h-full space-y-6'>
          <div className='flex items-center text-lg text-muted' role='status' aria-label='Likes count'>
            <FaRegHeart className='w-5 h-5 mr-2' aria-hidden='true' />
            <span className='font-light' aria-label={`${model.likes} likes`}>
              {model.likes}
            </span>
          </div>
          <h1 className='text-4xl md:text-5xl'>{model.name}</h1>

          <Pill className='w-fit' aria-label='Category'>
            {model.category}
          </Pill>

          <div className='max-w-none'>
            <p className='text-base leading-relaxed text-muted md:text-lg'>{model.description}</p>
          </div>

          <footer className='pt-4 text-xs tracking-wider uppercase text-muted'>
            <time dateTime={model.dateAdded}>Added on {new Date(model.dateAdded).toLocaleDateString()}</time>
          </footer>
        </section>
      </article>
    </div>
  );
}
