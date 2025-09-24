'use client'

import Link from "next/link";
import { WebsiteRoutes } from "@/routes";
import dataMenu, { IMenuItem } from "../dataMenu";

function MenuItem({ name, link }: IMenuItem) {
  return <Link href={link} className="text-sm text-black">{name}</Link>;
}

function HeaderDesktop() {
  return (
    <div className="w-full items-center justify-between h-full pl-8 pr-2 hidden lg:flex">
      <Link href={WebsiteRoutes.ROOT} className="flex flex-col">
        <span className="uppercase font-bold font-logo text-4xl text-black">
          CerDent
        </span>
        {/* <span className="font-logo text-[#333]">Laboratorium Protetyczne</span> */}
      </Link>
      <nav className="flex flex-row space-x-8">
        {dataMenu.map((item) => (
          <MenuItem key={item.link} name={item.name} link={item.link} />
        ))}
      </nav>
      <Link href="tel:509 828 545" className="bg-primary text-white rounded font-semibold py-3 px-5">Call 509 828 545</Link>
    </div>
  );
}

export default HeaderDesktop;
