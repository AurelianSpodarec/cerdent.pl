import Link from "next/link";
import { IMenuItem } from "../../dataMenu";

function MenuLink({ name, link, onClick }: IMenuItem & { onClick: () => void }) {
  return (
    <Link
      href={link}
      onClick={onClick}
      className="block px-4 py-2 hover:bg-muted transition-colors"
    >
      {name}
    </Link>
  );
}

export default MenuLink
