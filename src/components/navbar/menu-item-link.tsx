"use client";

import { useTranslations } from "next-intl";

import { MenuItem } from "@/lib/menu/types";

import SmartLink from "./smart-link";

export default function MenuItemLink({ item }: { item: MenuItem }) {
  const t = useTranslations("navbar");
  if (item.disabled) return null;

  return (
    <SmartLink item={item} className="text-default-600 flex items-center gap-2">
      {item.icon && <item.icon />}
      <span>{t(item.label)}</span>
    </SmartLink>
  );
}
