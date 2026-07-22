import PaginationButton from "@/app/components/PaginationButton";
import { PaginationControlsProps } from "@/app/types";

export default function PaginationControls({ totalPages, currentPage }: PaginationControlsProps) {
  return (
    <div className='flex justify-center gap-1'>
      {currentPage !== 1 && <PaginationButton page={1} label='<<' />}
      {currentPage !== 1 && <PaginationButton page={currentPage - 1} />}
      <PaginationButton page={currentPage} isActive={true} />
      {currentPage !== totalPages && <PaginationButton page={currentPage + 1} />}
      {currentPage !== totalPages && <PaginationButton page={totalPages} label='>>' />}
    </div>
  );
}
