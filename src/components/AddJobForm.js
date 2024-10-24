import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './AddJobForm.css';

// Validation Schema using Yup
const validationSchema = Yup.object({
  title: Yup.string().required('Job title is required'),
  company: Yup.string().required('Company name is required'),
  description: Yup.string().required('Job description is required'),
  image: Yup.string().url('Must be a valid URL').required('Image URL is required'),
});

function AddJobForm({ onSubmit }) {
  return (
    <div className="form-container">
      <h2>Add New Job</h2>
      <Formik
        initialValues={{ title: '', company: '', description: '', image: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        {() => (
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
              <label htmlFor="image">Image URL</label>
              <Field name="image" type="text" placeholder="Enter image URL" />
              <ErrorMessage name="image" component="div" className="error" />
            </div>

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
