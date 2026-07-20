import SortButton from "@/app/components/SortButton";
import { SortControlsProps } from "../types";

export default function SortControls({ startTransition }: SortControlsProps) {
  return (
    <div className='flex items-center gap-2'>
      <span className='text-sm text-gray-600'>Sort by:</span>

      <SortButton startTransition={startTransition} sort='alpha'>
        A-Z
      </SortButton>
      <SortButton startTransition={startTransition} sort='popular'>
        Popular
      </SortButton>
      <SortButton startTransition={startTransition} sort='recent'>
        Recent
      </SortButton>
    </div>
  );
}
