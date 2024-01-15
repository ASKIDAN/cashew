import * as Yup from 'yup';
export const schema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 4 chars minimum"),
})
