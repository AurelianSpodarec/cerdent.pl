import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pl", "it", "tr"],
  defaultLocale: "pl",
  localePrefix: "as-needed"
})