import TrucksList from "../../components/TrucksList/TrucksList.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={s.catalogPage}>
      <Filter />
      <TrucksList />
    </div>
  );
};
export default CatalogPage;
