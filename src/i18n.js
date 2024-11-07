import {initReactI18next} from "react-i18next";
import i18next from "i18next";

i18next.use(initReactI18next).init({
  lng: "en",
  resources: {
    ru: {
      translation: {
        mainSubheading:
          "5+ лет корпоративной разработки, веду блог тут и на ютубе",
        notFoundTitle: "Тут ничего не найдено!",
        notFoundLink: "Вернуться на главную",
        experienceHeader: "мой опыт",
        experienceTitle: "опыт",
        contactsTitle: "контакты",

        experienceList: [
          {
            title: "Raiffesen",
            data: "05.2024 - настоящее время",
            bullets: [
              "Разработал систему микро-фронтендов на основе Webpack Module Federation, что улучшило масштабируемость проекта и позволило команде работать независимо друг от друга",
              "Самостоятельно создавал макеты в Figma для улучшения UX и удовлетворения требований заказчика, с их последующей реализацией на фронтенде",
              "Добавил unit-тесты с использованием Jest и Testing Library в проект, обеспечив почти полное покрытие наиболее важных компонентов",
            ],
            link: "https://www.rbinternational.com/de/raiffeisen.html",
          },
          {
            title: "Garpix",
            data: "06.2021 - 05.2024",
            bullets: [
              "Разработал UI-кит на основе Material UI и внедрил его в проект, что сократило время на разработку новых функций и упростило работу для всех членов команды",
              "Добавил precommit-хуки в проект, которые запускают ESLint, что уменьшило количество инцидентов на тестовых и продакшен-стендах",
              "Разработал сложную систему с сериализацией данных и выводом в таблицы, а также дальнейшим парсингом в Excel, что значительно улучшило работу операторов с сервисом",
              "Разработал full stack приложение с frontend на React и Backend For Frontend на NestJS с базой данных на PostgreSQL",
            ],
            link: "https://garpix.com",
          },
          {
            title: "Nike",
            data: "02.2020 - 06.2021",
            bullets: [
              "переписал легаси код на React приложение",
              "разработал ReactJS - kit благодаря которому сильно ускорилось создание новых рекламных лендингов",
            ],
            link: "https://nike.com",
          },
        ],
      },
    },
    en: {
      translation: {
        mainSubheading:
          "5+ years of commercial development, also content creator, you can check it here or on YouTube",
        notFoundTitle: "Nothing to see here!",
        notFoundLink: "Go to the home pag",
        experienceHeader: "My experience",
        experienceTitle: "experience",
        contactsTitle: "contacts",

        experienceList: [
          {
            title: "Raiffesen",
            data: "05.2024 - nowadays",
            bullets: [
              "developed microfrontend system based on webpack module federation, which improved the scalability of the project and also allowed the team to work independently of each other",
              "I created mockups in figma myself to improve UX and meet the customer's needs with their subsequent implementation on the frontend",
              "add unit tests on Jest and Testing Library to the project with almost full coverage of most important components",
            ],
            link: "https://www.raiffeisen.ru/",
          },
          {
            title: "Garpix",
            data: "06.2021 - 05.2024",
            bullets: [
              "developed ui kit based on material ui and implements it to the project that decrease feature development time and make it easier for all team members",
              "add precommit hooks to the project that runs eslint, that decrease count of incidents on test and production stands",
              "developed a complex system with data serialization and output to tables, as well as further parsing into Excel, which greatly improved the work of operators with the service",
              "developed full stack app with frontend on React and Backend For Frontend on NestJS with DB on PostgreSQL",
            ],
            link: "https://garpix.com",
          },
          {
            title: "Nike",
            data: "02.2020 - 06.2021",
            bullets: [
              "redevelop project from legacy code to react that increase page speed",
              "developed a basic ReactJS kit for creating advertising landing pages that needed to be done frequently",
              "increased the Google PageSpeed Insight rate to 98 % by introducing new image formats and compression, as well as the correct use of HTML tags",
            ],
            link: "https://nike.com",
          },
        ],
      },
    },
  },
});
