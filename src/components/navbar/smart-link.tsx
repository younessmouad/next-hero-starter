import { Link } from "@heroui/link";

import { MenuItem } from "@/lib/menu/types";
import { cn } from "@/lib/utils/cn";

interface Props {
  item: MenuItem;
  className?: string;
  children: React.ReactNode;
}

export default function SmartLink({ item, className, children }: Props) {
  if (item.disabled) {
    return (
      <span className={cn("cursor-not-allowed opacity-50", className)}>
        {children}
      </span>
    );
  }

  const href = item.route || item.href;
  const isExternal = item.href && !item.route;

  if (isExternal) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
