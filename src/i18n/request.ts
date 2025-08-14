import fs from "fs";
import _ from "lodash";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import path from "path";

import { routing } from "./routing";

type Messages = Record<string, Record<string, string>>;

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // Load translations from the translations directory
  const dirPath = path.join(process.cwd(), "translations", locale);
  const files = fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".json"));

  const messages: Messages = {};

  // Read each file and parse its content
  for (const file of files) {
    const key = _.camelCase(file.replace(".json", ""));
    const filePath = path.join(dirPath, file);

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(fileContent);

    if (typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error(`Invalid translation file: ${file}`);
    }

    messages[key] = parsed as Record<string, string>;
  }

  return {
    locale,
    messages,
  };
});
