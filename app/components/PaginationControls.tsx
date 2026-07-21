import PaginationButton from "@/app/components/PaginationButton";
import { PaginationControlsProps } from "@/app/types";

export default function PaginationControls({ totalPages, currentPage }: PaginationControlsProps) {
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className='flex justify-center gap-1'>
      {pagesArray.map((page) => (
        <PaginationButton key={page} page={page} isActive={currentPage === page} />
      ))}
    </div>
  );
}
