import { initReactI18next } from "react-i18next";
import i18next from "i18next";

i18next.use(initReactI18next).init({
  lng: "ru",
  resources: {
    ru: {
      translation: {
        mainSubheading:
          "5+ лет корпоративной разработки, веду блог тут и на ютубе",
        notFoundTitle: "Тут ничего не найдено!",
        notFoundLink: "Вернуться на главную",
      },
    },
    en: {
      translation: {
        mainSubheading:
          "5+ years of commercial development, also content creator, you can check it here or on YouTube",
        notFoundTitle: "Nothing to see here!",
        notFoundLink: "Go to the home pag",
      },
    },
  },
});
