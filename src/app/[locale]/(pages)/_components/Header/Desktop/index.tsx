'use client'

import Link from "next/link";
import { WebsiteRoutes } from "@/routes";
import dataMenu, { IMenuItem } from "../dataMenu";

function MenuItem({ name, link }: IMenuItem) {
  return <Link href={link} className="text-sm text-black">{name}</Link>;
}

function HeaderDesktop() {
  return (
    <div className="w-full items-center justify-between h-full lg:pl-8 pl-2 pr-1 lg:pr-2 flex">
      <Link href={WebsiteRoutes.ROOT} className="flex flex-col">
        <div className="flex flex-row items-center">
          <span className="uppercase font-bold font-logo text-4xl text-black">
            CerDent
          </span>
        </div>
      </Link>
      <nav className="flex flex-row space-x-8 hidden lg:flex">
        {dataMenu.map((item) => (
          <MenuItem key={item.link} name={item.name} link={item.link} />
        ))}
      </nav>
      <Link href="tel:509 828 545" className="bg-primary flex space-x-1 border-2 border-[#efba49] text-[#333] rounded font-semibold py-3 px-5">
        <span className="hidden lg:flex">Zadzwoń</span>
        <span>509 828 545</span>
      </Link>
    </div>
  );
}

export default HeaderDesktop;
