import { ButtonHTMLAttributes, ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface NotificationActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

export function NotificationAction({
  icon: Icon,
  ...rest
}: NotificationActionProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        "size-8 rounded flex items-center justify-center bg-zinc-800",
        rest.className
      )}
    >
      <Icon className="size-3 text-zinc-50" />
    </button>
  );
}
