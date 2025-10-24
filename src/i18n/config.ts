interface Language {
  code: string;
  name: string;
  locale: string
}

export const languages: Language[] = [
  { code: "en", name: "English", locale: "en_US" },
  { code: "fr", name: "Français", locale: "fr_FR" },
];
export const defaultLocale = "en";

/// All translation files used in the app should be added here
/// in order to be properly loaded by the i18n system
export const translationFiles = [
  "navbar",
];