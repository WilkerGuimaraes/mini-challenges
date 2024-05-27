import { X, Check } from "lucide-react";

export function NotificationActions() {
  return (
    <div className="flex gap-2 self-center">
      <button className="size-8 rounded flex items-center justify-center bg-red-800 hover:bg-red-900">
        <X className="size-3 text-zinc-50" />
      </button>
      <button className="size-8 rounded flex items-center justify-center bg-green-600 hover:bg-green-700">
        <Check className="size-3 text-zinc-50" />
      </button>
    </div>
  );
}
