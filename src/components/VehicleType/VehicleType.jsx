import { BsGrid1X2, BsGrid3X3Gap } from "react-icons/bs";
import s from "./VehicleType.module.css";
import { IoGridOutline } from "react-icons/io5";

const VehicleType = () => {
  return (
    <div className={s.typeCont}>
      <h3 className={s.title}>Vehicle type</h3>
      <hr className={s.customLine} />
      <div className={s.filterList}>
        <button type="button" className={`${s.filterBtnVan} ${s.filterBtn}`}>
          <BsGrid1X2 className={s.iconBtn} />
          <p className={s.textBtn}>Van</p>
        </button>
        <button type="button" className={`${s.filterBtnFull} ${s.filterBtn}`}>
          <IoGridOutline className={s.iconBtn} />
          <p className={s.textBtn}>Fully Integrated</p>
        </button>
        <button type="button" className={`${s.filterBtnAlcove} ${s.filterBtn}`}>
          <BsGrid3X3Gap className={s.iconBtn} />
          <p className={s.textBtn}>Alcove</p>
        </button>
      </div>
    </div>
  );
};
export default VehicleType;
