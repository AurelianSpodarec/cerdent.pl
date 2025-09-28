"use client";

import { useTranslations } from 'next-intl';
import { WebsiteRoutes } from '@/routes';

export function InitRoutes() {
  const t = useTranslations("menu");
  WebsiteRoutes.init(t);
  return null;
}
