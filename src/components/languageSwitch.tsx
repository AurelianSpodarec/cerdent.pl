'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';

// https://nucleoapp.com/svg-flag-icons

function UkraineFlag() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
    >
      <path fill='#2455b2' d='M31 8a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v9h30z'></path>
      <path fill='#f9da49' d='M5 28h22a4 4 0 0 0 4-4v-8H1v8a4 4 0 0 0 4 4'></path>
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

function EnglandFlag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <rect width="30" height="24" x="1" y="4" fill="#071b65" rx="4" ry="4"></rect>
      <path fill="#fff" d="M5.101 4H5a3.99 3.99 0 0 0-3.933 3.334L26.899 28H27a3.99 3.99 0 0 0 3.933-3.334z"></path>
      <path fill="#b92932" d="M22.25 19h-2.5l9.934 7.947c.387-.353.704-.777.929-1.257l-8.363-6.691ZM1.387 6.309 9.75 13h2.5L2.316 5.053a4 4 0 0 0-.929 1.257Z"></path>
      <path fill="#fff" d="M5 28h.101L30.933 7.334A3.99 3.99 0 0 0 27 4h-.101L1.067 24.666A3.99 3.99 0 0 0 5 28"></path>
      <path fill="#fff" d="M13 4h6v24h-6z"></path>
      <path fill="#fff" d="M1 13h30v6H1z"></path>
      <path fill="#b92932" d="M14 4h4v24h-4z"></path>
      <path fill="#b92932" d="M31 14v4H1v-4zM28.222 4.21 19 11.586V13h.75l9.943-7.94a4 4 0 0 0-1.471-.85M2.328 26.957a4 4 0 0 0 1.447.832L13 20.409v-1.408h-.75z"></path>
      <path d="M27 4H5a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h22a4 0 0 0 4-4V8a4 0 0 0-4-4m3 20c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3z" opacity="0.15"></path>
      <path fill="#fff" d="M27 5H5a3 3 0 0 0-3 3v1a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3V8a3 3 0 0 0-3-3" opacity="0.2"></path>
    </svg>
  )
}

function ItalyFlag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <path fill="#fff" d="M10 4h12v24H10z"></path>
      <path fill="#41914d" d="M5 4h6v24H5c-2.208 0-4-1.792-4-4V8c0-2.208 1.792-4 4-4"></path>
      <path fill="#bf393b" d="M27 28h-6V4h6c2.208 0 4 1.792 4 4v16c0 2.208-1.792 4-4 4"></path>
      <path d="M27 4H5a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4m3 20c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3z" opacity="0.15"></path>
      <path fill="#fff" d="M27 5H5a3 3 0 0 0-3 3v1a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3V8a3 3 0 0 0-3-3" opacity="0.2"></path>
    </svg>
  )
}

function PolandFlag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <path fill="#cb2e40" d="M1 24a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4v-9H1z"></path>
      <path fill="#fff" d="M27 4H5a4 4 0 0 0-4 4v8h30V8a4 4 0 0 0-4-4"></path>
      <path d="M5 28h22a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4M2 8c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3z" opacity="0.15"></path>
      <path fill="#fff" d="M27 5H5a3 3 0 0 0-3 3v1a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3V8a3 3 0 0 0-3-3" opacity="0.2"></path>
    </svg>
  )
}

function TurkeyFlag() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
    >
      <rect
        width='30'
        height='24'
        x='1'
        y='4'
        fill='#d12d24'
        rx='4'
        ry='4'
      ></rect>
      <path
        d='M27 4H5a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4m3 20c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3z'
        opacity='0.15'
      ></path>
      <path
        fill='#fff'
        d='M27 5H5a3 3 0 0 0-3 3v1a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3V8a3 3 0 0 0-3-3'
        opacity='0.2'
      ></path>
      <path
        fill='#fff'
        d='M19.807 16 21 14.358l-1.931.627-1.193-1.643v2.031L15.945 16l1.931.627v2.031l1.193-1.643 1.931.627z'
      ></path>
      <path
        fill='#fff'
        d='M15.953 19.325a4.471 4.471 0 1 1 .337-6.314 5.59 5.59 0 1 0 0 5.977 5 5 0 0 1-.337.337'
      ></path>
    </svg>
  )
}

function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
    setOpen(false);
  };
  const tra = [
    { name: "Polski", display: "PL", abbriviation: "pl", image: PolandFlag },
    { name: "Italiano", display: "IT", abbriviation: "it", image: ItalyFlag },
    { name: "British", display: "UK", abbriviation: "en", image: EnglandFlag },
    { name: "Türkçe", display: "TR", abbriviation: "tr", image: TurkeyFlag },
    { name: "Українська", display: "UA", abbriviation: "ua", image: UkraineFlag },
  ];



  const currentLang = tra.find(l => l.abbriviation === locale);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm shadow-xs hover:bg-accent/10`}>
          {currentLang && <currentLang.image />}
          <span>{currentLang?.display}</span>
          <ChevronDownIcon
            className={`size-4 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[200px] bg-white p-1 border border-gray-900/20 rounded">
        {tra.map(lang => {
          const isSelected = lang.abbriviation === locale;
          return (
            <button
              key={lang.abbriviation}
              onClick={() => switchLocale(lang.abbriviation)}
              className={`${isSelected ? "bg-black text-white" : ""} hover:bg-black hover:text-white cursor-pointer flex items-center gap-2 w-full p-1 rounded hover:bg-accent/10`}
            >
              <div className="flex-shrink-0">
                <lang.image />
              </div>
              <span>{lang.name}</span>
            </button>
          );
        })}
      </PopoverContent>

    </Popover>
  );
}

export default LanguageSwitcher;