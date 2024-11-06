import {Link, Outlet, useLocation} from "react-router-dom";
import {LanguageSelecor} from "../Language";
import classNames from "classnames";
import {ROUTS} from "../../const";

import "./index.scss";

function Layout() {
  const {pathname} = useLocation();

  return (
    <div className='layout'>
      <div className='layout-header'>
        <Link to='/'>
          <h1 className='layout-header-logo'>AI</h1>
        </Link>

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

        <LanguageSelecor/>
      </div>
      <Outlet/>
    </div>
  );
}

export {Layout};
