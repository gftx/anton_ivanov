import { useState } from "react";
import { Contacts, Experience, Laptop } from "./components";

import "./index.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";

interface Page {
  id: string;
  navTitle: string;
  component: JSX.Element;
}

function Main() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { search } = useLocation();

  const setQuery = (param: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(param, value);
    navigate(`?${searchParams.toString()}`);
  };

  const queryParams = new URLSearchParams(search);

  const filter = queryParams.get("subpage");

  const pages = [
    { id: "base", navTitle: "", component: <Laptop /> },
    {
      id: "experience",
      navTitle: t("experienceTitle"),
      component: <Experience />,
    },
    { id: "contacts", navTitle: t("contactsTitle"), component: <Contacts /> },
  ];

  const [currentPage, setCurrentPage] = useState<Page>(() => {
    const page = pages.find((i) => {
      if (i.id === filter) {
        return i;
      }
    });
    if (page) {
      return page;
    } else {
      return pages[0];
    }
  });

  const navigateTo = (page: Page) => {
    setCurrentPage(page);

    setQuery("subpage", page.id);
  };

  return (
    <div className='main'>
      <div className='main-container'>
        <div className='main-title'>
          <button onClick={() => navigateTo(pages[0])}>
            <h2 className='main-title-heading'>
              Anton <br /> Ivanov
            </h2>
          </button>

          <div className='main-navigation'>
            {pages.map((page) => {
              if (!page.navTitle) {
                return;
              }
              return (
                <button
                  key={page.id}
                  className={classNames("main-navigation-btn", {
                    "main-navigation-btn__active": currentPage?.id === page.id,
                  })}
                  onClick={() => navigateTo(page)}
                >
                  {page.navTitle}
                </button>
              );
            })}
          </div>
        </div>
        {currentPage.component}
      </div>
    </div>
  );
}

export { Main };
