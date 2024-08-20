import { getBrowserLang } from "@/utils";
import { createI18n } from "vue-i18n";

import en from "./modules/en";
import zh from "./modules/zh";

const i18n = createI18n({
  locale: getBrowserLang(),
  messages: {
    zh,
    en,
  },
});

export default i18n;
