import { useDispatch, useSelector } from "react-redux";
import s from "./TruckDetailPage.module.css";
import { selectIsLoading, selectTruckItem } from "../../redux/trucks/slice.js";
import { useEffect } from "react";
import { fetchTruckById } from "../../redux/trucks/operations.js";
import { useParams } from "react-router-dom";
import TruckDetail from "../../components/TruckDetail/TruckDetail.jsx";

const TruckDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const truck = useSelector(selectTruckItem);

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTruckById(id));
  }, [dispatch, id]);

  return (
    <div className={s.detailPage}>
      {isLoading || !truck || Object.keys(truck).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <TruckDetail />
      )}
    </div>
  );
};
export default TruckDetailsPage;
