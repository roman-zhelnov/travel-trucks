import { NavLink } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.homeContainer}>
      <div className={s.containerTitle}>
        <div className={s.text}>
          <h1>Campers of your dreams</h1>
          <p>You can find everything you want in our catalog</p>
        </div>
        <NavLink to="/catalog">
          <button type="button" className={s.btn}>
            View Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};
export default HomePage;
