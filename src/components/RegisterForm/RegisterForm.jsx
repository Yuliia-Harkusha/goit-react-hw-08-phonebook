import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import { register } from 'redux/auth/operations';
import { userRegisterSchema } from 'utils/validationSchema';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onFormSubmit}
      validationSchema={userRegisterSchema}
    >
      {({ values, handleChange, handleSubmit, handleReset, isSubmitting }) => (
        <Form onSubmit={handleSubmit} autoComplete="off">
          <label>
            User name
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={values.name}
            />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              value={values.email}
            />
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.pasword}
            />
            <ErrorMessage name="password" component="div" />
          </label>
          <button type="submit" disabled={isSubmitting} onClick={handleReset}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};
