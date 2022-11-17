import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { userLoginSchema } from 'utils/validationSchema';
import { logIn } from 'redux/auth/operations';
import {
  FormStyled,
  Label,
  Input,
  Button,
  ErrorText,
} from 'components/RegisterForm/RegisterForm.styled';

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
      validationSchema={userLoginSchema}
    >
      {({ values, handleChange, handleSubmit, handleReset, isSubmitting }) => (
        <FormStyled onSubmit={handleSubmit} autoComplete="off">
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
              value={values.pasword}
            />
            <FormError name="password" component="div" />
          </Label>
          <Button type="submit" disabled={isSubmitting} onClick={handleReset}>
            Log In
          </Button>
        </FormStyled>
      )}
    </Formik>
  );
};
