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
      <div className={s.img}>
        {gallery.length > 0 && (
          <img src={gallery[0].thumb} alt={`${name} preview`} />
        )}
      </div>
      <div>
        <div className={s.headItem}>
          <h2>{name}</h2>
          <div className={s.price}>
            <p>&#8364;{price}.00</p>
            <SlHeart className={s.iconHeart} />
          </div>
        </div>
        <div>
          <GoStarFill className={s.iconStar} />
          <p>
            {rating}({reviews.length} Reviews)
          </p>
        </div>
        <div>
          <BsMap />
          <p>{location}</p>
        </div>
        <p className={s.description}>{description}</p>
        <div>
          <BsDiagram3 />
          <p>{increaseFirstLetter(transmission)}</p>
        </div>
        <div>
          <BsFuelPump />
          <p>{increaseFirstLetter(engine)}</p>
        </div>
        {kitchen ? (
          <div>
            <BsCupHot />
            <p>Kitchen</p>
          </div>
        ) : null}
        {AC ? (
          <div>
            <BsWind />
            <p>AC</p>
          </div>
        ) : null}
        <Link to={`/catalog/${id}`}>
          <button type="button">Show more</button>
        </Link>
      </div>
    </li>
  );
};
export default TruckItem;
