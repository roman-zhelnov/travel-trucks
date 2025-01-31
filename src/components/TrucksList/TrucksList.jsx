import { useSelector } from "react-redux";
import { selectTotal, selectTrucks } from "../../redux/trucks/slice.js";
import TruckItem from "../TruckItem/TruckItem.jsx";
import s from "./TruckList.module.css";
import { useState } from "react";

const TrucksList = () => {
  const trucks = useSelector(selectTrucks);
  const total = useSelector(selectTotal);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 4, total));
  };

  return (
    <div className={s.catalogList}>
      <ul className={s.list}>
        {trucks.slice(0, visibleCount).map((item) => (
          <TruckItem key={item.id} {...item} />
        ))}
      </ul>
      {visibleCount < total ? (
        <button
          type="button"
          className={s.loadMoreBtn}
          onClick={handleLoadMore}
        >
          Load More
        </button>
      ) : null}
    </div>
  );
};
export default TrucksList;
