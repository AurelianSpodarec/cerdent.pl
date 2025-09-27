'use client'

import Link from "next/link";
import { WebsiteRoutes } from "@/routes";
import { getMenuItems, IMenuItem } from "../dataMenu";
import { useTranslations } from "next-intl";

function MenuItem({ name, link }: IMenuItem) {
  return <Link href={link} className="text-sm text-black">{name}</Link>;
}

function HeaderDesktop() {
  const tPhone = useTranslations('phone')

  const dataMenu = getMenuItems();

  return (
    <div className="w-full items-center justify-between h-full lg:pl-4 pl-2 pr-1 flex">
      <Link href={WebsiteRoutes.ROOT} className="flex flex-col">
        <div className="flex flex-row items-center">
          <svg
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            viewBox='0 0 850.4 850.4'
            className="fill-[#cf0001]/70 size-12"
          >
            <path
              d='m756.9 244.6 7.2 32.4H637.9c-7.6-9.8-17.2-19.1-25.3-28.8-197.8-240.6-532.5 37-386 292.2 52.7 91.8 146 141.5 252.7 121.1 72.5-13.9 117.3-61.8 161-116.8l123.8-.7c.8.8-2.5 18.3-3.6 21.6-19.4 61.6-109.7 148.9-167 177.5-143.2 71.3-316.3 34.3-424.6-80.1C85.7 561.2 52.5 442.2 87.7 313.1c88.4-323.5 508.8-366.4 669.2-68.5'
              className='st0'
            ></path>
            <path
              d='M583.7 349.2c40.7 188.5-87.1 244.6-252.5 227.3V248.2c112 .1 196.3-20.2 252.5 101m-86.6 14.5c-15.4-38.6-50.5-31.2-86.6-32.5V490c48 .9 89.8 3.9 94-55.8 2.1-23.4 1.3-48.7-7.4-70.5'
              className='st0'
            ></path>
          </svg>
          {/* <svg
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            viewBox='0 0 850.4 850.4'
              className="fill-red-500 size-10"
          >
            <path
              d='M780 544H648.4c-44.8 73.9-124.3 123-214.9 123-140 0-253.5-117.3-253.5-262s113.5-262 253.5-262S604.3 192.6 649 267h131v-4.4C724.7 122.7 590.4 24 433.5 24S60 194.6 60 405s167.2 381 373.5 381S724.7 687.3 780 547.4z'
              className='st0'
            ></path>
            <path
              d='M449 234H328v342h121s148-8 147-171c1-163-147-171-147-171m58 191.2s-1 62.8-54 62.8h-43.5V322H453c53 0 54 62.8 54 62.8z'
              className='st0'
            ></path>
          </svg> */}
          <span className="font-bold font-logo text-4xl text-black">
            CerDent
          </span>
        </div>
      </Link>
      <nav className="flex flex-row space-x-8 hidden lg:flex">
        {dataMenu.map((item) => (
          <MenuItem key={item.link} name={item.name} link={item.link} />
        ))}
      </nav>
      <Link href={`tel:${tPhone("raw")}`} className="bg-primary flex space-x-1 border-2 border-[#efba49] text-[#333] rounded font-semibold py-3 px-5">
        <span className="hidden lg:flex">{tPhone('label')} </span>
        <span>{tPhone('display')}</span>
      </Link>
    </div>
  );
}

export default HeaderDesktop;
