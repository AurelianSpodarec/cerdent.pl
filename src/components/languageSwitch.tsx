'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';


function PolandFlag() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
    >
      <path fill='#cb2e40' d='M1 24a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4v-9H1z'></path>
      <path fill='#fff' d='M27 4H5a4 4 0 0 0-4 4v8h30V8a4 4 0 0 0-4-4'></path>
      <path
        d='M5 28h22a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4M2 8c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3z'
        opacity='0.15'
      ></path>
      <path
        fill='#fff'
        d='M27 5H5a3 3 0 0 0-3 3v1a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3V8a3 3 0 0 0-3-3'
        opacity='0.2'
      ></path>
    </svg>
  )
}

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
    <div>

    {/* // <select */}
        {/* // value={locale} */}
        {/* // onChange={e => switchLocale(e.target.value)}> */}
        <div value="pl"><PolandFlag />Polski</div>
      {/* <option value="en">English</option>
      <option value="it">Italiano</option>
      </select> */}
    </div>
  );
}

export default LanguageSwitcher