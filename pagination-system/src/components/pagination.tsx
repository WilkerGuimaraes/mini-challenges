import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
  return (
    <div className="space-x-2">
      <button type="button" className="h-10 w-14 bg-slate-700 rounded">
        <ChevronLeft className="mx-auto" />
      </button>
      <button type="button" className="h-10 w-14 bg-slate-700 rounded">
        <ChevronRight className="mx-auto" />
      </button>
    </div>
  );
}
