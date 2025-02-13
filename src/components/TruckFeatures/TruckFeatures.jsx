import { useSelector } from "react-redux";
import { selectTruckItem } from "../../redux/trucks/slice.js";
import s from "./TruckFeatures.module.css";
import IconList from "../IconList/IconList.jsx";
import { addSpaceNumber, formatCamelCase } from "../../helpers/helpers.js";

const TruckFeatures = () => {
  const truckInfo = useSelector(selectTruckItem);
  const { form, length, width, height, tank, consumption } = truckInfo;

  return (
    <div className={s.featuresBox}>
      <IconList />
      <div className={s.wrapperDetails}>
        <h3>Vehicle details</h3>
        <hr className={s.customLine} />
        <ul className={s.detailsList}>
          <li className={s.detailsItem}>
            <p>Form</p>
            <p>{formatCamelCase(form)}</p>
          </li>
          <li className={s.detailsItem}>
            <p>Length</p>
            <p>{addSpaceNumber(length)}</p>
          </li>
          <li className={s.detailsItem}>
            <p>Width</p>
            <p>{addSpaceNumber(width)}</p>
          </li>
          <li className={s.detailsItem}>
            <p>Height</p>
            <p>{addSpaceNumber(height)}</p>
          </li>
          <li className={s.detailsItem}>
            <p>Tank</p>
            <p>{addSpaceNumber(tank)}</p>
          </li>
          <li className={s.detailsItem}>
            <p>Consumption</p>
            <p>{addSpaceNumber(consumption)}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default TruckFeatures;
