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
  IconMail,
  FormItem,
  IconPassword,
} from 'components/RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = ({ email, password }) => {
    return dispatch(logIn({ email, password }));
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
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <FormStyled onSubmit={handleSubmit} autoComplete="off">
          <Label>
            E-mail
            <FormItem>
              <IconMail />
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={handleChange}
                value={values.email}
              />
            </FormItem>
            <FormError name="email" component="div" />
          </Label>
          <Label>
            Password
            <FormItem>
              <IconPassword />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={values.pasword}
              />
            </FormItem>
            <FormError name="password" component="div" />
          </Label>
          <Button type="submit" disabled={isSubmitting}>
            Log In
          </Button>
        </FormStyled>
      )}
    </Formik>
  );
};
