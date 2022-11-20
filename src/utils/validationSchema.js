import * as Yup from 'yup';

export const userLoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(16).required(),
});

export const userRegisterSchema = Yup.object().shape({
  name: Yup.string().min(2).max(30).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(7).max(16).required(),
});
