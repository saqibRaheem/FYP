import * as Yup from "yup";

export const signupValidation = Yup.object({
  // username: Yup.string().required("Please provide a username"),
  stdId: Yup.string().required("Please provide a registeration Id"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 charaters")
    .required("Password is required"),
});
export const signupValidationCompany = Yup.object({
  // username: Yup.string().required("Please provide a username"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 charaters")
    .required("Password is required"),
});
export const loginValidation = Yup.object({
  email: Yup.string().required("Please enter a valid email address"),
  password: Yup.string()
    .min(8, "Password must be at least 8 charaters")
    .required("Password is required"),
});

export const changePassValidation = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 charaters")
    .required("Password is required"),
  newpassword: Yup.string()
    .min(8, "Password must be at least 8 charaters")
    .required("Password is required"),
});
export const editProfileValidation = Yup.object({
  firstname: Yup.string().required("required"),
  lastname: Yup.string().required("required"),
  email: Yup.string().required("required"),
  phone: Yup.string().required("required"),
  date: Yup.string().required("required"),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(11)
    .required("required"),
});
export const editComProfileValidation = Yup.object({
  companyname: Yup.string().required("required"),
  ownername: Yup.string().required("required"),
  email: Yup.string().required("required"),
  phone: Yup.string().required("required"),
  date: Yup.string().required("required"),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(11)
    .required("required"),
});
export const postjobvalidation = Yup.object({
  title: Yup.string().required("required"),
  noVacancy: Yup.number().required("required"),
  description: Yup.string().required("required"),
  skills: Yup.string().required("required"),
  jobtype: Yup.string().required("required"),
});
