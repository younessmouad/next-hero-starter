
"use client";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  useDisclosure,
} from "@heroui/react";
import { IconWorld } from "@tabler/icons-react";
import { useLocale } from "next-intl";

import { languages } from "@/i18n/config";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitch() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    const currentHash = window.location.hash || ""; // keep current hash if any
    // Update locale while preserving path
    router.replace(pathname + currentHash, { locale: newLocale });
  };

  const selectedLanguage =
    languages.find((lang) => lang.code === currentLocale) ?? languages[0];

  return (
    <>
      <Button
        variant="bordered"
        className="text-default-500 border-1 text-center font-semibold"
        onPress={onOpen}
        aria-label="Change language"
        startContent={<IconWorld />}
      >
        {selectedLanguage.code.toUpperCase()}
      </Button>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
        classNames={{
          wrapper: "mt-16 ",
        }}
        radius="none"
        className="max-w-52 px-0"
        backdrop="transparent"
        shouldBlockScroll={false}
      >
        <DrawerContent className="px-0 py-3">
          {() => (
            <>
              <DrawerBody>
                {languages.map((language) => (
                  <Button
                    fullWidth
                    radius="sm"
                    key={language.code}
                    variant={
                      language.code === selectedLanguage.code ? "solid" : "flat"
                    }
                    color={
                      language.code === selectedLanguage.code
                        ? "primary"
                        : "default"
                    }
                    onPress={() => handleLanguageChange(language.code)}
                  >
                    {language.name}
                  </Button>
                ))}
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
