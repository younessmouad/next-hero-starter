interface Language {
  code: string;
  name: string;
}

export const languages: Language[] = [
  { code: "fr", name: "Français" },
  { code: "en", name: "English" },
];

export const defaultLocale = "en";
