import {
  BsCupHot,
  BsDiagram3,
  BsFuelPump,
  BsMap,
  BsWind,
} from "react-icons/bs";
import { GoStarFill } from "react-icons/go";
import { SlHeart } from "react-icons/sl";
import { Link } from "react-router-dom";
import { increaseFirstLetter } from "../../helpers/helpers.js";
import s from "./TruckItem.module.css";

const TruckItem = ({
  id,
  name,
  price,
  rating,
  location,
  description,
  transmission,
  engine,
  AC,
  kitchen,
  reviews,
  gallery,
}) => {
  return (
    <li className={s.item}>
      <div>
        {gallery.length > 0 && (
          <img src={gallery[0].thumb} alt={`${name} preview`} />
        )}
      </div>
      <div className={s.infoContainer}>
        <div>
          <div className={s.headItem}>
            <h2>{name}</h2>
            <div className={s.price}>
              <p>&#8364;{price.toFixed(2)}</p>
              <button className={s.favoritesBtn}>
                <SlHeart className={s.iconHeart} />
              </button>
            </div>
          </div>
          <div className={s.wrapperRatingLocation}>
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
        </div>
        <p className={s.description}>{description}</p>
        <div className={s.equipmentList}>
          <div className={s.equipmentItem}>
            <BsDiagram3 className={s.equipmentIcon} />
            <p>{increaseFirstLetter(transmission)}</p>
          </div>
          <div className={s.equipmentItem}>
            <BsFuelPump className={s.equipmentIcon} />
            <p>{increaseFirstLetter(engine)}</p>
          </div>
          {kitchen ? (
            <div className={s.equipmentItem}>
              <BsCupHot className={s.equipmentIcon} />
              <p>Kitchen</p>
            </div>
          ) : null}
          {AC ? (
            <div className={s.equipmentItem}>
              <BsWind className={s.equipmentIcon} />
              <p>AC</p>
            </div>
          ) : null}
        </div>
        <Link to={`/catalog/${id}`}>
          <button type="button" className={s.btn}>
            Show more
          </button>
        </Link>
      </div>
    </li>
  );
};
export default TruckItem;
