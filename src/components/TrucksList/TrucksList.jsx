import { useSelector } from "react-redux";
import { selectTrucks } from "../../redux/trucks/slice.js";
import TruckItem from "../TruckItem/TruckItem.jsx";
import s from "./TruckList.module.css";

const TrucksList = () => {
  const trucks = useSelector(selectTrucks);

  return (
    <div className={s.catalogList}>
      <ul className={s.list}>
        {trucks.map((item) => (
          <TruckItem key={item.id} {...item} />
        ))}
      </ul>
      <button type="button" className={s.loadMoreBtn}>
        Load More
      </button>
    </div>
  );
};
export default TrucksList;
