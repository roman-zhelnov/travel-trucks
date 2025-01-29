import clsx from "clsx";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
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
