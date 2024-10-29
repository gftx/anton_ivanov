import { initReactI18next } from "react-i18next";
import i18next from "i18next";

i18next.use(initReactI18next).init({
  lng: "ru",
  resources: {
    ru: {
        translation: {
            notFoundTitle: "Тут ничего не найдено!",
            notFoundLink: "Вернуться на главную"
        }
    },
    en: {
        translation: {
            notFoundTitle: "Nothing to see here!",
            notFoundLink: "Go to the home pag"
        }
    }
  }
});
