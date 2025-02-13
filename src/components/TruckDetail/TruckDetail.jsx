import { GoStarFill } from "react-icons/go";
import { BsMap } from "react-icons/bs";
import s from "./TruckDetail.module.css";
import { useSelector } from "react-redux";
import { selectTruckItem } from "../../redux/trucks/slice.js";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const TruckDetail = () => {
  const truck = useSelector(selectTruckItem);

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };

  const { name, rating, reviews, location, price, gallery, description } =
    truck;
  return (
    <div>
      <div className={s.titleBlock}>
        <h2 className={s.name}>{name}</h2>
        <div className={s.infoBlock}>
          <div className={s.ratingLocationBlock}>
            <div className={s.rating}>
              <GoStarFill className={s.iconStar} />
              <p>
                {rating}({reviews.length} Reviews)
              </p>
            </div>
            <div className={s.location}>
              <BsMap className={s.iconMap} />
              <p>{location}</p>
            </div>
          </div>
          <p className={s.price}>&#8364;{price.toFixed(2)}</p>
        </div>
      </div>
      <ul className={s.imgList}>
        {gallery.map((item) => (
          <li key={item.original}>
            <img src={item.thumb} alt={`photo preview`} className={s.img} />
          </li>
        ))}
      </ul>
      <p className={s.description}>{description}</p>
      <div className={s.links}>
        <NavLink to="features" className={buildLinkClass}>
          Features
        </NavLink>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
      </div>
      <hr />
    </div>
  );
};
export default TruckDetail;
