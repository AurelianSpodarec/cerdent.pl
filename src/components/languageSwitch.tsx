'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };

  return (
    <select
      value={locale}
      onChange={e => switchLocale(e.target.value)}>
      <option value="pl">Polski</option>
      <option value="en">English</option>
    </select>
  );
}

export default LanguageSwitcher