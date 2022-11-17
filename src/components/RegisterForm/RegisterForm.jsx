import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { register } from 'redux/auth/operations';
import { userRegisterSchema } from 'utils/validationSchema';
import {
  FormStyled,
  Label,
  Input,
  Button,
  ErrorText,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const user = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(register(user));
    console.log(user);
    // form.reset();
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onFormSubmit}
      validationSchema={userRegisterSchema}
    >
      {/* {({
        errors,
        touched,
        values,
        handleChange,
        handleSubmit,
        handleReset,
        isSubmitting,
      }) => (
        <Form autoComplete="off">
          <label>
            User name
            <Field
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={values.name}
            />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            Email
            <Field
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            Password
            <Field
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <ErrorMessage name="password" component="div" />
          </label>
          <button type="submit" disabled={isSubmitting} onClick={handleReset}>
            Register
          </button>
        </Form>
      )} */}
      {({ values, handleChange, handleSubmit, handleReset, isSubmitting }) => (
        <FormStyled autoComplete="off">
          <Label>
            User Name
            <Input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={values.name}
            />
            <FormError name="name" component="div" />
          </Label>

          <Label>
            Email
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              value={values.email}
            />
            <FormError name="email" component="div" />
          </Label>
          <Label>
            Password
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
            />
            <FormError name="password" component="div" />
          </Label>
          <Button type="submit" disabled={isSubmitting} onClick={handleReset}>
            Register
          </Button>
        </FormStyled>
      )}
    </Formik>
  );
};
