"use client";

import { useTranslations } from "next-intl";
import { WebsiteRoutes } from "@/routes";

export function InitRoutes() {
  const t = useTranslations("routes");
  WebsiteRoutes.init(t);
  return null; // nothing to render
}
