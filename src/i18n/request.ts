import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { translationFiles } from "./config";
import { routing } from "./routing";
import _ from "lodash";

type TranslationFile = typeof translationFiles[number];
type Messages = Record<TranslationFile, Record<string, string>>;

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;


  // Import each file explicitly based on the list
  const entries = await Promise.all(
    translationFiles.map(async (name) => {
      const mod = await import(`../../translations/${locale}/${name}.json`);
      const key = _.camelCase(name);
      return [key, mod.default] as const;
    })
  );

  const messages: Messages = Object.fromEntries(entries) as Messages;

  return {
    locale,
    messages
  };
});