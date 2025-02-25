import s from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isDetailsPage = /^\/catalog\/[^/]+(\/features|\/reviews)?$/.test(
    location.pathname
  );
  const buildLinkClass = ({ isActive }) =>
    isActive && !isDetailsPage ? s.activeLink : s.link;
  return (
    <div className={s.header}>
      <svg className={s.iconLogo}>
        <use href="sprite.svg#icon-Logo"></use>
      </svg>
      <div className={s.navigationBox}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/catalog">
          Catalog
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
