import { Field, Form, Formik } from "formik";
import s from "./Filter.module.css";
import { BsMap } from "react-icons/bs";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment.jsx";
import VehicleType from "../VehicleType/VehicleType.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  resetTruck,
  selectFilters,
  setFilters,
} from "../../redux/trucks/slice.js";
import { fetchTrucks } from "../../redux/trucks/operations.js";
import { sanitizedFilters } from "../../helpers/helpers.js";

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const initialValues = {
    location: "",
  };

  const handleSearch = (values) => {
    dispatch(resetTruck());
    const newFilters = {
      ...filters,
      location: values.location.trim(),
    };

    const snitFilters = sanitizedFilters(newFilters);

    dispatch(setFilters(snitFilters));
    dispatch(fetchTrucks({ filters: snitFilters, page: 1 }));
  };
  return (
    <div className={s.filterBox}>
      <Formik initialValues={initialValues} onSubmit={handleSearch}>
        <Form>
          <div className={s.location}>
            <label htmlFor="location" className={s.label}>
              Location
            </label>

            <div className={s.inputBox}>
              <Field
                id="location"
                name="location"
                type="text"
                placeholder="City"
                className={s.input}
                autocomplete="off"
              />
              <BsMap className={s.iconMap} />
            </div>
          </div>
          <h2 className={s.title}>Filters</h2>
          <VehicleEquipment />
          <VehicleType />
          <button type="submit" className={s.formBtn}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default Filter;
