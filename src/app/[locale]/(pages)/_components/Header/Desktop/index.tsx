'use client'

import Link from "next/link";
import { useTranslations } from "next-intl";

import { configBrand } from "@/config/brand.";
import { useMenuItems } from "../dataMenu";

import Logo from "@/components/icons/Logo";
import MenuItem from "./_components/MenuItem";

function HeaderDesktop() {
  const tPhone = useTranslations('phone')
  const dataMenu = useMenuItems();

  return (
    <div className="w-full items-center justify-between h-full pl-2 lg:pl-4  pr-2 flex">
      <Link href="/" className="flex flex-col">
        <div className="flex flex-row items-center">
          <Logo />
          <span className="font-bold font-logo text-3xl lg:text-4xl text-black">
            {configBrand.name}
          </span>
        </div>
      </Link>
      <nav className="flex flex-row space-x-8 hidden lg:flex">
        {dataMenu.map((item) => (
          <MenuItem key={item.link} name={item.name} link={item.link} />
        ))}
      </nav>
      <Link href={`tel:${tPhone("raw")}`} className="bg-primary flex space-x-1 border-2 border-[#efba49] text-white rounded font-semibold py-2 px-3 lg:py-3 lg:px-5">
        <span className="flex xs:hidden lg:flex">{tPhone('label')} </span>
        <span className="hidden sm:flex">{tPhone('display')}</span>
      </Link>
    </div>
  );
}

export default HeaderDesktop;
