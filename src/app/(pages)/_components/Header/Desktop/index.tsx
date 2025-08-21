'use client'

import Link from "next/link";
import { WebsiteRoutes } from "@/routes";
import dataMenu, { IMenuItem } from "../dataMenu";

function MenuItem({ name, link }: IMenuItem) {
  return <Link href={link} className="text-sm">{name}</Link>;
}

function HeaderDesktop() {
  return (
    <div className="w-full items-center justify-between h-full px-8 hidden lg:flex">
      <Link href={WebsiteRoutes.ROOT} className="uppercase font-bold text-3xl">
        CerDent
      </Link>
      <nav className="flex flex-row space-x-8">
        {dataMenu.map((item) => (
          <MenuItem key={item.link} name={item.name} link={item.link} />
        ))}
      </nav>
      <button className="bg-white rounded-sm text-black font-semibold py-2 px-4">Tap To Call 509 828 545</button>
    </div>
  );
}

export default HeaderDesktop;
