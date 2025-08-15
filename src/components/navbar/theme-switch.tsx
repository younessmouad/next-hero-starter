"use client";

import { useEffect, useState } from "react";

import { Button } from "@heroui/button";
import { IconMoon, IconSun } from "@tabler/icons-react";

import useTheme from "@/lib/hooks/ui/use-theme";

export function ThemeSwitch({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Button
        isIconOnly
        variant="light"
        className="text-default-500 text-center"
        onPress={toggleTheme}
      >
        {theme === "light" ? (
          <IconSun className="transition-all duration-300 ease-in-out group-active:rotate-180" />
        ) : (
          <IconMoon className="transition-all duration-300 ease-in-out group-active:rotate-180" />
        )}
      </Button>
    </div>
  );
}
