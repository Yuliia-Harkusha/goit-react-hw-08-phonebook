import * as yup from 'yup';

export const userLoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required(),
});

export const userRegisterSchema = yup.object().shape({
  name: yup.string().min(2).max(30).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required(),
});
