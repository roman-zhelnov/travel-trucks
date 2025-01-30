import { Field, Form, Formik } from "formik";
import s from "./Filter.module.css";
import { BsMap } from "react-icons/bs";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment.jsx";
import VehicleType from "../VehicleType/VehicleType.jsx";

const Filter = () => {
  const initialValues = {
    location: "",
  };
  return (
    <Formik initialValues={initialValues}>
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
  );
};
export default Filter;
