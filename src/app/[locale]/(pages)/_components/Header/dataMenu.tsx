import { useTranslations } from 'next-intl';

export interface IMenuItem {
  name: string;
  link: string;
}

export function useMenuItems(): IMenuItem[] {
  const t = useTranslations('menu');

  return ['offer', 'process', 'testimonials', 'faq'].map(key => ({
    name: t(`${key}.name`),
    link: t(`${key}.link`)
  }));
}
