import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectTotal,
  selectTrucks,
  setCurrentPage,
} from "../../redux/trucks/slice.js";
import TruckItem from "../TruckItem/TruckItem.jsx";
import s from "./TruckList.module.css";
import { useEffect } from "react";
import { fetchTrucks } from "../../redux/trucks/operations.js";

const TrucksList = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const trucks = useSelector(selectTrucks);
  const total = useSelector(selectTotal);

  useEffect(() => {
    dispatch(fetchTrucks({ page: 1, limit: 4 }));
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchTrucks({ page: currentPage + 1, limit: 4 }));
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <div className={s.catalogList}>
      <ul className={s.list}>
        {trucks.map((item) => (
          <TruckItem key={item.id} {...item} />
        ))}
      </ul>
      {trucks.length < total ? (
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
