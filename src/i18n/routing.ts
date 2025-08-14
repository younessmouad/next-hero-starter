import { defineRouting } from "next-intl/routing";

import { defaultLocale, languages } from "./config";

export const routing = defineRouting({
  locales: languages.map((lang) => lang.code),
  defaultLocale,
  localeDetection: true,
});
