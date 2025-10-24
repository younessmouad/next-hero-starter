"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Navbar as HeroNavbar,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { IconLaurelWreathFilled, IconMenu2, IconX } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

import { NAV_MENU, isMenuGroup } from "@/lib/menu";
import { ROUTES } from "@/lib/routes";

import LanguageSwitch from "./language-switch";
import MenuGroupDropdown from "./menu-group-dropdown";
import MenuItemLink from "./menu-item-link";
import { ThemeSwitch } from "./theme-switch";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("navbar");

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <HeroNavbar
      isBlurred
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      shouldBlockScroll={false}
      isBordered
      position="static"
      className="sm:sticky"
    >
      <NavbarBrand className="flex items-center gap-2">
        <Link
          href={ROUTES.main.home}
          className="text-foreground items-center gap-2 text-xl font-extrabold"
        >
          <IconLaurelWreathFilled />
          Next Hero
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center" className="hidden lg:flex">
        {NAV_MENU.map((item) =>
          isMenuGroup(item) ? (
            <MenuGroupDropdown key={item.label} menuGrp={item} />
          ) : (
            <MenuItemLink key={item.label} item={item} />
          )
        )}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-0.5">
        <LanguageSwitch />
        <ThemeSwitch />
        <NavbarMenuToggle
          icon={isMenuOpen ? <IconX /> : <IconMenu2 />}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="ml-1 hover:cursor-pointer lg:hidden"
        />
      </NavbarContent>

      <NavbarMenu className="scrollbar-hide z-50">
        {NAV_MENU.map((menu) => {
          if (isMenuGroup(menu)) {
            return (
              <div key={menu.label}>
                <h3>{t(menu.label)}</h3>
                {menu.items.map((item) => (
                  <NavbarMenuItem key={item.label}>
                    <MenuItemLink item={item} />
                  </NavbarMenuItem>
                ))}
              </div>
            );
          } else {
            return (
              <NavbarMenuItem key={menu.label}>
                <MenuItemLink item={menu} />
              </NavbarMenuItem>
            );
          }
        })}
      </NavbarMenu>
    </HeroNavbar>
  );
}
