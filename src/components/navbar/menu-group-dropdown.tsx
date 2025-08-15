"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { NavbarItem } from "@heroui/navbar";
import { IconChevronDown } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

import { MenuGroup } from "@/lib/menu/types";

export default function MenuGroupDropdown({ menuGrp }: { menuGrp: MenuGroup }) {
  const t = useTranslations("navbar");
  const visibleItems = menuGrp.items.filter((item) => !item.disabled);

  if (!visibleItems.length) return null;

  return (
    <Dropdown
      showArrow
      shadow="sm"
      classNames={{ content: "py-1 px-1 border border-divider" }}
    >
      <NavbarItem>
        <DropdownTrigger>
          <div className="flex cursor-pointer items-center gap-1">
            <span>{t(menuGrp.label)}</span>
            <IconChevronDown size={18} />
          </div>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu>
        {visibleItems.map((item, index) => (
          <DropdownItem
            key={item.label}
            startContent={item.icon ? <item.icon size={20} /> : null}
            href={item.route ?? item.href ?? "#"}
            target={item.href && !item.route ? "_blank" : undefined}
            rel={item.href && !item.route ? "noopener noreferrer" : undefined}
          >
            {t(item.label)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
