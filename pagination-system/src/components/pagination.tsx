import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";

interface PaginationProps {
  page: number;
}

export function Pagination({ page }: PaginationProps) {
  const [, setSearchParams] = useSearchParams();

  function previousPage() {
    if (page - 1 <= 0) return;

    setSearchParams((params) => {
      params.set("page", String(page - 1));

      return params;
    });
  }

  function nextPage() {
    if (page + 1 > 10) return;

    setSearchParams((params) => {
      params.set("page", String(page + 1));

      return params;
    });
  }

  return (
    <div className="space-x-2">
      <button
        type="button"
        onClick={previousPage}
        disabled={page - 1 <= 0}
        className="h-10 w-14 bg-slate-700 rounded"
      >
        <ChevronLeft className="mx-auto" />
      </button>
      <button
        type="button"
        onClick={nextPage}
        disabled={page + 1 > 10}
        className="h-10 w-14 bg-slate-700 rounded"
      >
        <ChevronRight className="mx-auto" />
      </button>
    </div>
  );
}
