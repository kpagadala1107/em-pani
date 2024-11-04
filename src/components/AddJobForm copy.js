import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './AddJobForm.css';

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" },
];



// Validation Schema using Yup
const validationSchema = Yup.object({
  title: Yup.string().required('Job title is required'),
  company: Yup.string().required('Company name is required'),
  description: Yup.string().required('Job description is required'),
  image: Yup.string().url('Must be a valid URL').required('Image URL is required'),
  comboFields: Yup.array()
  .of(Yup.string().required("Required"))
  .max(5, "You can add up to 5 fields only"),
});

function AddJobForm({ onSubmit }) {


  return (
    <div className="form-container">
      <h2>Add New Job</h2>
      <Formik
        initialValues={{ title: '', company: '', description: '', image: '', comboFields: [] }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        {(values) => (
          <Form className="job-form">
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
            
            <FieldArray name="comboFields">
            {({ push, remove }) => (
              <>
                {values.comboFields.map((_, index) => (
                  <div key={index} style={{ marginBottom: "10px" }}>
                    <Field
                      as="select"
                      name={`comboFields[${index}]`}
                      style={{ marginRight: "10px" }}
                    >
                      <option value="">Select an option</option>
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Field>
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      disabled={values.comboFields.length === 1}
                    >
                      Remove
                    </button>
                    <ErrorMessage name={`comboFields[${index}]`} component="div" style={{ color: "red" }} />
                  </div>
                ))}
                {values.comboFields.length < 5 && (
                  <button type="button" onClick={() => push("")}>
                    Add ComboBox
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
    </div>
  );
}

export default AddJobForm;
