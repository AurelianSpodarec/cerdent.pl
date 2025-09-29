import Link from "next/link";
import { IMenuItem } from "../../dataMenu";

function MenuItem({ name, link }: IMenuItem) {
  return <Link href={link} className="text-sm text-black">{name}</Link>;
}

export default MenuItem
