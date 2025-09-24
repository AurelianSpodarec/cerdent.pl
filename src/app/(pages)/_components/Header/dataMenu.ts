import { WebsiteRoutes } from "@/routes";

export interface IMenuItem {
  name: string;
  link: WebsiteRoutes
}

const dataMenu: IMenuItem[] = [
  {
    name: "Fix my Denture",
    link: WebsiteRoutes.OFFER
  },
  {
    name: "How it Works",
    link: WebsiteRoutes.PROCESS
  },
  {
    name: "Patients Stories",
    link: WebsiteRoutes.TESTIMONIALS
  },
  {
    name: "FAQ",
    link: WebsiteRoutes.FAQ
  },
  // {
  //   name: "Find Us",
  //   link: WebsiteRoutes.CONTACT
  // }
]

export default dataMenu