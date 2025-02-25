import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from "./FormBook.module.css";
import * as Yup from "yup";

const FormBook = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  };

  const nameReg = /^[a-zA-Z\s'-]+$/;

  const validateSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "At least 3 characters")
      .max(50, "No more than 50 characters")
      .matches(nameReg, "Incorrect name")
      .required("Name is required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    bookingDate: Yup.date().nullable().required("Booking date is required"),
    comment: Yup.string(),
  });

  const handleSubmit = (values, options) => {
    console.log("Submit values:", values);
    options.resetForm();
  };

  return (
    <div className={s.formBox}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validateSchema}
      >
        <Form>
          <div className={s.formTitle}>
            <h3>Book your campervan now</h3>
            <p>Stay connected! We are always ready to help you.</p>
          </div>
          <div className={s.formField}>
            <div>
              <Field
                className={s.input}
                name="name"
                placeholder="Name*"
                id="name"
                type="text"
              />
              <ErrorMessage className={s.error} name="name" component="div" />
            </div>
            <div>
              <Field
                className={s.input}
                name="email"
                placeholder="Email*"
                id="email"
                type="email"
              />
              <ErrorMessage className={s.error} name="email" component="div" />
            </div>
            <Field className={s.input} name="bookingDate">
              {({ field, form }) => (
                <div>
                  <DatePicker
                    className={s.input}
                    {...field}
                    selected={field.value ? new Date(field.value) : null}
                    onChange={(date) => {
                      form.setFieldValue("bookingDate", date);
                    }}
                    minDate={new Date()}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Booking date*"
                  />
                  {form.touched.bookingDate && form.errors.bookingDate && (
                    <div className={s.error}>{form.errors.bookingDate}</div>
                  )}
                </div>
              )}
            </Field>
            <div>
              <Field
                as="textarea"
                className={s.input}
                name="comment"
                placeholder="Comment"
                id="comment"
              />
              <ErrorMessage
                className={s.error}
                name="comment"
                component="div"
              />
            </div>
          </div>
          <button className={s.btn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default FormBook;
