import MenuLink from "./MenuLink";
import dataMenu from "../../dataMenu";

function Drawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <aside className={`fixed top-0 right-0 w-4/5 h-full bg-[#2d2d3b] overflow-y-auto z-50 flex flex-col transform transition-transform duration-200 ${open ? "translate-x-0" : "translate-x-full"}`}>

      <header className="flex justify-end p-4">
        <button
          className="px-3 py-1 rounded-md bg-muted text-muted-foreground"
          onClick={onClose}
        >
          ✕
        </button>
      </header>

      <nav className="p-4 flex-1">
        <div className="space-y-2">
          {dataMenu.map((item) => (
            <MenuLink key={item.link} {...item} onClick={onClose} />
          ))}
        </div>
      </nav>

      <footer className="p-4 text-sm text-muted-foreground border-t border-muted/20 space-y-2">
        <address className="not-italic space-y-1">
          <a href="mailto:aurelianxspodarec@gmail.com" className="block">
            aurelianxspodarec@gmail.com
          </a>
          <a href="tel:07751022563" className="block">
            07751022563
          </a>
        </address>

        <ul className="space-y-1">
          <li>Developer,</li>
          <li>Blogger,</li>
          <li>Teacher,</li>
          <li>Speaker</li>
        </ul>

        <small className="block text-xs">
          &copy; Aurelian Spodarec 2018–2023 (archived design, copyright continues)
        </small>
      </footer>

    </aside>
  );
}

export default Drawer
