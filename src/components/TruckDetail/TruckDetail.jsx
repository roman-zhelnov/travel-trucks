import { GoStarFill } from "react-icons/go";
import { BsMap } from "react-icons/bs";
import s from "./TruckDetail.module.css";
import { useSelector } from "react-redux";
import { selectTruckItem } from "../../redux/trucks/slice.js";

const TruckDetail = () => {
  const truck = useSelector(selectTruckItem);
  console.log(truck);

  const { name, rating, reviews, location, price, gallery, description } =
    truck;
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <div>
          <div>
            <GoStarFill />
            <p>
              {rating}({reviews.length} Reviews)
            </p>
          </div>
          <div>
            <BsMap className={s.iconMap} />
            <p>{location}</p>
          </div>
          <p>&#8364;{price}.00</p>
        </div>
      </div>
      <ul>
        {gallery.map((item) => (
          <li key={item.original}>
            <img src={item.thumb} alt={`photo preview`} />
          </li>
        ))}
      </ul>
      <p>{description}</p>
    </div>
  );
};
export default TruckDetail;
