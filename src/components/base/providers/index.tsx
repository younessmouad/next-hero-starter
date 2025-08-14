import { ReactNode } from "react";

import { NextIntlClientProvider } from "next-intl";

import ProvidersClient from "./providers-client";

interface ProvidersProps {
  children: ReactNode;
  messages: Record<string, string>;
  locale: string;
}

export default function Providers({
  children,
  messages,
  locale,
}: ProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ProvidersClient>{children}</ProvidersClient>
    </NextIntlClientProvider>
  );
}
