"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Navbar as HeroNavbar,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from "@heroui/react";
import { IconLaurelWreathFilled, IconMenu2, IconX } from "@tabler/icons-react";

import { ROUTES } from "@/lib/routes";

import { ThemeSwitch } from "./theme-switch";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <HeroNavbar
      isBlurred
      className="py-3"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <div
        id="navbar-dropdown-portal"
        className="absolute top-full left-0 z-50 w-full"
      />

      <NavbarMenuToggle
        icon={isMenuOpen ? <IconX /> : <IconMenu2 />}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden"
      />

      <NavbarBrand className="flex items-center gap-2">
        <IconLaurelWreathFilled size={20} />
        <Link href={ROUTES.main.home} className="text-xl font-semibold">
          Next Hero
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <ThemeSwitch />
      </NavbarContent>
    </HeroNavbar>
  );
}
