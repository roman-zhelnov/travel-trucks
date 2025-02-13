import {
  BsCupHot,
  BsDiagram3,
  BsFuelPump,
  BsUiRadios,
  BsWind,
} from "react-icons/bs";
import { increaseFirstLetter } from "../../helpers/helpers.js";
import s from "./IconList.module.css";
import { useSelector } from "react-redux";
import { selectTruckItem } from "../../redux/trucks/slice.js";
import { PiShower } from "react-icons/pi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { LuMicrowave } from "react-icons/lu";
import { GiGasStove } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";

const IconList = () => {
  const truckItem = useSelector(selectTruckItem);
  const {
    transmission,
    engine,
    kitchen,
    AC,
    bathroom,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = truckItem;
  return (
    <ul className={s.equipmentList}>
      <li className={s.equipmentItem}>
        <BsDiagram3 className={s.equipmentIcon} />
        <p>{increaseFirstLetter(transmission)}</p>
      </li>
      <li className={s.equipmentItem}>
        <BsFuelPump className={s.equipmentIcon} />
        <p>{increaseFirstLetter(engine)}</p>
      </li>
      {kitchen ? (
        <li className={s.equipmentItem}>
          <BsCupHot className={s.equipmentIcon} />
          <p>Kitchen</p>
        </li>
      ) : null}
      {AC ? (
        <li className={s.equipmentItem}>
          <BsWind className={s.equipmentIcon} />
          <p>AC</p>
        </li>
      ) : null}
      {bathroom ? (
        <li className={s.equipmentItem}>
          <PiShower className={s.equipmentIcon} />
          <p>Bathroom</p>
        </li>
      ) : null}
      {radio ? (
        <li className={s.equipmentItem}>
          <BsUiRadios className={s.equipmentIcon} />
          <p>Radio</p>
        </li>
      ) : null}
      {refrigerator ? (
        <li className={s.equipmentItem}>
          <CgSmartHomeRefrigerator className={s.equipmentIcon} />
          <p>Refrigerator</p>
        </li>
      ) : null}
      {microwave ? (
        <li className={s.equipmentItem}>
          <LuMicrowave className={s.equipmentIcon} />
          <p>Microwave</p>
        </li>
      ) : null}
      {gas ? (
        <li className={s.equipmentItem}>
          <GiGasStove className={s.equipmentIcon} />
          <p>Gas</p>
        </li>
      ) : null}
      {water ? (
        <li className={s.equipmentItem}>
          <IoWaterOutline className={s.equipmentIcon} />
          <p>Water</p>
        </li>
      ) : null}
    </ul>
  );
};
export default IconList;
