import { ElementType } from "react";

interface NotificationIconProps {
  icon: ElementType;
}

export function NotificationIcon({ icon: Icon }: NotificationIconProps) {
  return <Icon className="size-6 text-yellow-500 mt-3" />;
}
