import { BsCupHot, BsDiagram3, BsWind } from "react-icons/bs";
import { HiOutlineTv } from "react-icons/hi2";
import { PiShower } from "react-icons/pi";
import s from "./VehicleEquipment.module.css";

const VehicleEquipment = () => {
  return (
    <div className={s.equipmentCont}>
      <h3 className={s.title}>Vehicle equipment</h3>
      <hr className={s.customLine} />
      <div className={s.filterList}>
        <button type="button" className={`${s.filterBtnAC} ${s.filterBtn}`}>
          <BsWind className={s.iconBtn} />
          <p className={s.textBtn}>AC</p>
        </button>
        <button type="button" className={`${s.filterBtnAuto} ${s.filterBtn}`}>
          <BsDiagram3 className={s.iconBtn} />
          <p className={s.textBtn}>Automatic</p>
        </button>
        <button
          type="button"
          className={`${s.filterBtnKitchen} ${s.filterBtn}`}
        >
          <BsCupHot className={s.iconBtn} />
          <p className={s.textBtn}>Kitchen</p>
        </button>
        <button type="button" className={`${s.filterBtnTV} ${s.filterBtn}`}>
          <HiOutlineTv className={s.iconBtn} />
          <p className={s.textBtn}>TV</p>
        </button>
        <button
          type="button"
          className={`${s.filterBtnBathroom} ${s.filterBtn}`}
        >
          <PiShower className={s.iconBtn} />
          <p className={s.textBtn}>Bathroom</p>
        </button>
      </div>
    </div>
  );
};
export default VehicleEquipment;
