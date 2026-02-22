// src/components/RegistrationForm.jsx
import React from 'react';
import { useFormik } from 'formik';

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Success:', data);
        alert('Form submitted successfully!');
      } catch (error) {
        console.error('Error:', error);
        alert('Error submitting form. Please try again.');
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = 'Username is required';
      }
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      }
      return errors;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? (
          <div style={{ color: 'red' }}>{formik.errors.username}</div>
        ) : null}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        ) : null}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
