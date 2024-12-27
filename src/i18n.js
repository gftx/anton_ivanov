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
            title: "Fit Heroes",
            data: "01.2024 - 11.2024",
            bullets: [
              "Разработка децентрализованных приложений (dApps): Создавал интерактивные интерфейсы для Web3-платформ с использованием React, TypeScript и библиотеки управления состоянием Redux.",
              "Интеграция с блокчейном: Настраивал взаимодействие с Ethereum через Web3.js. Обеспечивал безопасное подключение кошельков (MetaMask).",
              "Реализация пользовательских интерфейсов: Разрабатывал адаптивные и отзывчивые дизайны с использованием Styled Components и Material-UI. Оптимизировал производительность интерфейса для быстрой загрузки и плавной работы.",
              "Интеграция смарт-контрактов: Подключал смарт-контракты к интерфейсу приложения, реализовывал функции чтения данных из блокчейна и отправки транзакций. Тестировал взаимодействия с помощью Truffle."
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
            title: "Fit Heroes",
            data: "01.2024 - 11.2024",
            bullets: [
              "Developed decentralized applications (dApps): Built interactive interfaces for Web3 platforms using React, TypeScript, and state management library Redux.",
              "Blockchain integration: Configured interactions with Ethereum through Web3.js. Enabled secure wallet connections (MetaMask)",
              "Implemented user interfaces: Created responsive and adaptive designs using Styled Components and Material-UI. Optimized UI performance for fast loading and seamless interaction",
              "Smart contract integration: Connected smart contracts to the application interface, implemented functions for reading blockchain data and sending transactions. Tested interactions using Truffle"
            ],
            link: "https://www.raiffeisen.ru/",
          },
          {
            title: "Garpix",
            data: "06.2021 - 01.2024",
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
