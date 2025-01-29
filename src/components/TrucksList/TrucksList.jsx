import { useSelector } from "react-redux";
import { selectTrucks } from "../../redux/trucks/slice.js";
import TruckItem from "../TruckItem/TruckItem.jsx";

const TrucksList = () => {
  const trucks = useSelector(selectTrucks);
  console.log("trucks:", trucks);

  return (
    <ul>
      {trucks.map((item) => (
        <TruckItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
export default TrucksList;
