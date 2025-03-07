import { BsCupHot, BsDiagram3, BsWind } from "react-icons/bs";
import { HiOutlineTv } from "react-icons/hi2";
import { PiShower } from "react-icons/pi";
import s from "./VehicleEquipment.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, setFilters } from "../../redux/trucks/slice.js";

const VehicleEquipment = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const toggleFilters = (filterName) => {
    if (filterName === "transmission") {
      dispatch(
        setFilters({
          ...filters,
          transmission: filters.transmission === "automatic" ? "" : "automatic",
        })
      );
    } else {
      dispatch(
        setFilters({
          ...filters,
          [filterName]: !filters[filterName],
        })
      );
    }
  };

  return (
    <div className={s.equipmentCont}>
      <h3 className={s.title}>Vehicle equipment</h3>
      <hr className={s.customLine} />
      <div className={s.filterList}>
        <button
          type="button"
          className={`${s.filterBtnAC} ${s.filterBtn} ${
            filters.AC ? s.active : ""
          }`}
          onClick={() => toggleFilters("AC")}
        >
          <BsWind className={s.iconBtn} />
          <p className={s.textBtn}>AC</p>
        </button>
        <button
          type="button"
          className={`${s.filterBtnAuto} ${s.filterBtn} ${
            filters.transmission === "automatic" ? s.active : ""
          }`}
          onClick={() => toggleFilters("transmission")}
        >
          <BsDiagram3 className={s.iconBtn} />
          <p className={s.textBtn}>Automatic</p>
        </button>
        <button
          type="button"
          className={`${s.filterBtnKitchen} ${s.filterBtn} ${
            filters.kitchen ? s.active : ""
          }`}
          onClick={() => toggleFilters("kitchen")}
        >
          <BsCupHot className={s.iconBtn} />
          <p className={s.textBtn}>Kitchen</p>
        </button>
        <button
          type="button"
          className={`${s.filterBtnTV} ${s.filterBtn} ${
            filters.TV ? s.active : ""
          }`}
          onClick={() => toggleFilters("TV")}
        >
          <HiOutlineTv className={s.iconBtn} />
          <p className={s.textBtn}>TV</p>
        </button>
        <button
          type="button"
          className={`${s.filterBtnBathroom} ${s.filterBtn} ${
            filters.bathroom ? s.active : ""
          }`}
          onClick={() => toggleFilters("bathroom")}
        >
          <PiShower className={s.iconBtn} />
          <p className={s.textBtn}>Bathroom</p>
        </button>
      </div>
    </div>
  );
};
export default VehicleEquipment;
