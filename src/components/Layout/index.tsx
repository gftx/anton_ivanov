import {Link, Outlet, useLocation} from "react-router-dom";
import {LanguageSelector} from "../Language";
import classNames from "classnames";
import Hamburger from 'hamburger-react'

import {ROUTS} from "../../const";

import "./index.scss";
import {useEffect, useState} from "react";

function Layout() {
  const {pathname} = useLocation();
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (window.screen.width < 768) {
      setIsMobile(true)
    }
  }, [])

  return (
    <div className='layout'>
      <div className='layout-header'>
        <Link to='/'>
          <h1 className='layout-header-logo'>AI</h1>
        </Link>

        {isMobile ? (
          <>
            <Hamburger color='#ffffff' toggled={isOpen} toggle={setIsOpen}/>
            {isOpen && (
              <div className='layout-header-hamburger'>
                <div className='layout-header-hamburger-nav'>
                  <Link
                    className={classNames("layout-header-hamburger-nav-link", {
                      "layout-header-hamburger-nav-link__active": pathname === ROUTS.home.url,
                    })}
                    to={ROUTS.home.url}
                    onClick={() => setIsOpen(false)}
                  >
                    {ROUTS.home.title}
                  </Link>
                  <Link
                    className={classNames("layout-header-hamburger-nav-link", {
                      "layout-header-hamburger-nav-link__active": pathname === ROUTS.blog.url,
                    })}
                    to={ROUTS.blog.url}
                    onClick={() => setIsOpen(false)}
                  >
                    {ROUTS.blog.title}
                  </Link>
                </div>
                <div className='layout-header-hamburger-language'>
                  <LanguageSelector onClick={() => setIsOpen(false)}/>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className='layout-header-routing'>
              <Link
                className={classNames("layout-header-routing-link", {
                  "layout-header-routing-link__active": pathname === ROUTS.home.url,
                })}
                to={ROUTS.home.url}
              >
                {ROUTS.home.title}
              </Link>
              <Link
                className={classNames("layout-header-routing-link", {
                  "layout-header-routing-link__active": pathname === ROUTS.blog.url,
                })}
                to={ROUTS.blog.url}
              >
                {ROUTS.blog.title}
              </Link>
            </div>
            <LanguageSelector/>
          </>
        )}

      </div>
      <Outlet/>
    </div>
  );
}

export {Layout};
