import { Dispatch, SetStateAction, useMemo } from "react";

import { useTheme as useNextTheme } from "next-themes";

type Theme = "light" | "dark";
type SetTheme = Dispatch<SetStateAction<Theme>>;

export default function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme();
  return useMemo(() => {
    return {
      theme: theme === "system" ? systemTheme : theme,
      setTheme,
    } as { theme: Theme; setTheme: SetTheme };
  }, [theme, setTheme, systemTheme]);
}
