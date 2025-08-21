import { WebsiteRoutes } from "@/routes";

export interface IMenuItem {
  name: string;
  link: WebsiteRoutes
}

const dataMenu: IMenuItem[] = [
  {
    name: "Offer",
    link: WebsiteRoutes.ABOUT
  },
  {
    name: "Process",
    link: WebsiteRoutes.PROCESS
  },
  {
    name: "Testimonials",
    link: WebsiteRoutes.WORK
  },
  {
    name: "FAQ",
    link: WebsiteRoutes.SERVICES
  },
  {
    name: "Location",
    link: WebsiteRoutes.CONTACT
  }
]

export default dataMenu