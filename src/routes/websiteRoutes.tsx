import { useTranslations } from "next-intl";

class TranslatedRoutes {
  private t: ReturnType<typeof useTranslations> | null = null;

  init(translator: ReturnType<typeof useTranslations>) {
    this.t = translator;
  }

  get ROOT() {
    return this.t?.("root") || "/";
  }
  get OFFER() {
    return this.t?.("offer") || "#offer";
  }
  get TESTIMONIALS() {
    return this.t?.("testimonials") || "#testimonials";
  }
  get PROCESS() {
    return this.t?.("process") || "#process";
  }
  get FAQ() {
    return this.t?.("faq") || "#faq";
  }
}

export const WebsiteRoutes = new TranslatedRoutes();
