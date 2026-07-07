import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import Pill from "./Pill";
import placeholderImg from "@/public/placeholder.png";
import { ModelCardProps } from "@/app/types";
import Image from "next/image";

export default function ModelCard({ model }: ModelCardProps) {
  return (
    <Link href={`/3d-models/${model.id}`} className='block group hover:-translate-y-[3px] transition-all' aria-labelledby={`model-${model.id}-title`}>
      <div className='overflow-hidden bg-surface' role='article'>
        <div className='relative aspect-square'>
          <Image src={placeholderImg.src} width={placeholderImg.width} height={placeholderImg.height} alt={model.name} className='absolute inset-0 object-cover w-full h-full' />
        </div>
        <div className='p-4 pb-2 space-y-3'>
          <div className='flex justify-between min-h-[3.5rem]'>
            <h2 id={`model-${model.id}-title`} className='text-xl text-foreground line-clamp-2'>
              {model.name}
            </h2>
          </div>
          <p className='text-sm leading-relaxed text-muted line-clamp-2 min-h-[2.5rem]'>{model.description}</p>
          <div>
            <Pill>{model.category}</Pill>
          </div>
          <div className='flex items-center text-sm text-muted' aria-label={`${model.likes} likes`}>
            <FaRegHeart className='w-4 h-4 mr-1.5 text-muted' aria-hidden='true' />
            <span>{model.likes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
