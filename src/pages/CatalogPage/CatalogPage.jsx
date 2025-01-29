import { useDispatch } from "react-redux";
import TrucksList from "../../components/TrucksList/TrucksList.jsx";
import { useEffect } from "react";
import { fetchTrucks } from "../../redux/trucks/operations.js";
import Filter from "../../components/Filter/Filter.jsx";

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);
  return (
    <div className="">
      <Filter />
      <TrucksList />
    </div>
  );
};
export default CatalogPage;
