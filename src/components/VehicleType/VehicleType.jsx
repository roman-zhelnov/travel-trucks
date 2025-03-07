import { BsGrid1X2, BsGrid3X3Gap } from "react-icons/bs";
import s from "./VehicleType.module.css";
import { IoGridOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, setFilters } from "../../redux/trucks/slice.js";

const VehicleType = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const toggleTypeFilters = (value) => {
    dispatch(
      setFilters({
        ...filters,
        form: filters.form === value ? "" : value,
      })
    );
  };

  return (
    <div className={s.typeCont}>
      <h3 className={s.title}>Vehicle type</h3>
      <hr className={s.customLine} />
      <div className={s.filterList}>
        <button
          type="button"
          className={`${s.filterBtnVan} ${s.filterBtn} ${
            filters.form === "van" ? s.active : ""
          }`}
          onClick={() => toggleTypeFilters("van")}
        >
          <BsGrid1X2 className={s.iconBtn} />
          <p className={s.textBtn}>Van</p>
        </button>
        <button
          type="button"
          className={`${s.filterBtnFull} ${s.filterBtn} ${
            filters.form === "fullyIntegrated" ? s.active : ""
          }`}
          onClick={() => toggleTypeFilters("fullyIntegrated")}
        >
          <IoGridOutline className={s.iconBtn} />
          <p className={s.textBtn}>Fully Integrated</p>
        </button>
        <button
          type="button"
          className={`${s.filterBtnAlcove} ${s.filterBtn} ${
            filters.form === "alcove" ? s.active : ""
          }`}
          onClick={() => toggleTypeFilters("alcove")}
        >
          <BsGrid3X3Gap className={s.iconBtn} />
          <p className={s.textBtn}>Alcove</p>
        </button>
      </div>
    </div>
  );
};
export default VehicleType;
