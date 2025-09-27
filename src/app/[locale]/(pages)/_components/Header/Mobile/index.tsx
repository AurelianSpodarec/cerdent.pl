'use client'

import { useState } from "react";
import Link from "next/link";

import { WebsiteRoutes } from "@/routes";

import Drawer from "./_components/Drawer";
import Overlay from "./_components/Overlay";

import useLockBodyScroll from "@/hooks/useLockBodyScroll";

function HeaderMobile() {
  const [open, setOpen] = useState(false);
  useLockBodyScroll(open);

  return (
    <>
      <div className="flex justify-between items-center p-4 lg:hidden h-full w-full">
        <Link href={WebsiteRoutes.ROOT} className="font-semibold">
          Aurelian Spodarec
        </Link>

        <button
          className="px-3 py-1 rounded-md bg-primary text-primary-foreground"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>

      </div>
      <Overlay open={open} onClick={() => setOpen(false)} />
      <Drawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default HeaderMobile
