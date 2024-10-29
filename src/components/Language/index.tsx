import { useTranslation } from "react-i18next";
import "./index.scss";
import classNames from "classnames";

const languages = [
  { code: "ru", lang: "Rus" },
  { code: "en", lang: "Eng" },
];

const LanguageSelecor = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className='languages'>
      {languages.map((i) => (
        <button
          key={i.code}
          className={classNames("languages-btn", {
            "languages-btn__active": i18n.language === i.code,
          })}
          onClick={() => changeLanguage(i.code)}
        >
          {i.lang}
        </button>
      ))}
    </div>
  );
};

export { LanguageSelecor };
