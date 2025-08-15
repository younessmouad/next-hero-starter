import { Metadata, Viewport } from "next";
import { Suspense } from "react";

import { getMessages } from "next-intl/server";

import Footer from "@/components/base/footer";
import Providers from "@/components/base/providers";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";

import { cn } from "../../lib/utils/cn";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html suppressHydrationWarning lang={locale}>
      <head />
      <body
        className={cn(
          "min-h-screen overflow-x-hidden font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers messages={messages} locale={locale}>
          <div className="relative flex h-screen flex-col">
            <main className="container mx-auto max-w-7xl flex-grow px-6 pt-16">
              <Suspense>{children}</Suspense>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
