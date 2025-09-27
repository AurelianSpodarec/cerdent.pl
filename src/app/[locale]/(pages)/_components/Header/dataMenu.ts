import { WebsiteRoutes } from "@/routes";

export interface IMenuItem {
  name: string;
  link: WebsiteRoutes
}

// const dataMenu: IMenuItem[] = [
//   {
//     name: "Fix my Denture",
//     link: WebsiteRoutes.OFFER
//   },
//   {
//     name: "How it Works",
//     link: WebsiteRoutes.PROCESS
//   },
//   {
//     name: "Patients Stories",
//     link: WebsiteRoutes.TESTIMONIALS
//   },
//   {
//     name: "FAQ",
//     link: WebsiteRoutes.FAQ
//   },
// ]

const dataMenu: IMenuItem[] = [
  {
    name: "Napraw moją protezę",
    link: WebsiteRoutes.OFFER
  },
  {
    name: "Jak to działa",
    link: WebsiteRoutes.PROCESS
  },
  {
    name: "Historie pacjentów",
    link: WebsiteRoutes.TESTIMONIALS
  },
  {
    name: "FAQ",
    link: WebsiteRoutes.FAQ
  },
]


export default dataMenu