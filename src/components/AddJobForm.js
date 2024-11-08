import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import  "./AddJobForm.css";
import { useDispatch } from "react-redux";
import { saveFormData } from "../redux/JobSlice"; 

// Define options for ComboBox
const options = [
  { value: "kiran", label: "kiran" },
  { value: "kumar", label: "kumar" },
  { value: "John", label: "John" },
  { value: "Ben", label: "Ben" },
  { value: "Jen", label: "Jen" },
];

// Define validation schema for the main form
const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  people: Yup.number()
    .typeError("Must be a number")
    .positive("Must be positive")
    .required("Required"),
  dynamicFields: Yup.array()
    .of(
      Yup.object().shape({
        label: Yup.string().required("Required"),
        value: Yup.string().required("Required")
      })
    )
    .max(5, "You can add up to 5 ComboBox fields only"),
});

const ExistingFormWithComboBox = () => {
  const dispatch = useDispatch();

  const initialValues = {
    title: "",
    company: "",
    description: "",
    people: "",
    dynamicFields: [{ label: "", value: "" }],
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form values:", values);
        dispatch(saveFormData(values));
        alert("Form submitted successfully!");
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div className="form-field">
            <label htmlFor="title">Job Title</label>
            <Field name="title" type="text" placeholder="Enter job title" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>

          <div className="form-field">
            <label htmlFor="company">Company</label>
            <Field name="company" type="text" placeholder="Enter company name" />
            <ErrorMessage name="company" component="div" className="error" />
          </div>

          <div className="form-field">
            <label htmlFor="description">Job Description</label>
            <Field name="description" as="textarea" placeholder="Enter job description" />
            <ErrorMessage name="description" component="div" className="error" />
          </div>

          <div className="form-field">
            <label htmlFor="people">Number of people</label>
            <Field name="people" type="text" placeholder="Enter number of people" />
            <ErrorMessage name="people" component="div" className="error" />
          </div>

          <FieldArray name="dynamicFields">
            {({ push, remove }) => (
              <>
                {values.dynamicFields.map((field, index) => (
                  <div key={index} style={{ marginBottom: "10px" }}>
                    <Select
                      options={options}
                      name={`dynamicFields[${index}]`}
                      value={values.dynamicFields[index] || null}
                      onChange={(option) =>
                        setFieldValue(`dynamicFields[${index}]`, option)
                      }
                      isSearchable
                      placeholder="Select an option"
                    />
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      disabled={values.dynamicFields.length === 1}
                      style={{ marginLeft: "10px" }}
                    >
                      Remove
                    </button>
                    <ErrorMessage
                      name={`dynamicFields[${index}].label`}
                      component="div"
                      style={{ color: "red" }}
                    />
                  </div>
                ))}
                {values.dynamicFields.length < 5 && (
                  <button
                    type="button"
                    className="btn"
                    onClick={() => push({ label: "", value: "" })}
                  >
                    Add Vendor
                  </button>
                )}
              </>
            )}
          </FieldArray>

          <div className="form-field">
            <button type="submit" className="btn">Add Job</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ExistingFormWithComboBox;