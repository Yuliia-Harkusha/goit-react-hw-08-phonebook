import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import { userLoginSchema } from 'utils/validationSchema';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onFormSubmit}
      validationSchema={userLoginSchema}
    >
      {({ values, handleChange, handleSubmit, handleReset, isSubmitting }) => (
        <Form onSubmit={handleSubmit} autoComplete="off">
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
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
};
