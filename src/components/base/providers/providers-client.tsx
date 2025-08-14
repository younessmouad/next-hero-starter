"use client";

import { ReactNode } from "react";

import { HeroUIProvider } from "@heroui/system";
import { useLocale } from "next-intl";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { useRouter } from "@/i18n/navigation";

export default function ProvidersClient({ children }: { children: ReactNode }) {
  const router = useRouter();
  const locale = useLocale();

  return (
    <HeroUIProvider
      navigate={(href) => router.push(href, { locale })}
      className="flex flex-grow flex-col"
    >
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
