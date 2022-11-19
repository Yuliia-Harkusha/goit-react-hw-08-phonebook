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
  IconUser,
  FormItem,
  IconMail,
  IconPassword,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = ({ name, email, password }) => {
    return dispatch(register({ name, email, password }));
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
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <FormStyled onSubmit={handleSubmit} autoComplete="off">
          <Label>
            User Name
            <FormItem>
              <IconUser />
              <Input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={values.name}
              />
            </FormItem>
            <FormError name="name" component="div" />
          </Label>

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
                value={values.password}
              />
            </FormItem>
            <FormError name="password" component="div" />
          </Label>
          <Button type="submit" disabled={isSubmitting}>
            Register
          </Button>
        </FormStyled>
      )}
    </Formik>
  );
};
