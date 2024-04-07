import { useFormik } from "formik";
import * as Yup from "yup";
import { validateEmail } from "../utils/validateHelpers";

const useSignupForm = (handleSubmit) => {
  const form = useFormik({
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword:""
    },
    validate: (values) => {
        const errors = {};
        if (!values?.firstName) {
          errors.customerName = "First Name is Mandatory!";
        }
        if (!values?.lastName) {
          errors.city = "Last Name is Mandatory!";
        }
        if(!values?.email){
          errors.email = "Email Required"
        }
        if(!values?.password){
            errors.password = "Password is mandatory"
        }
        if(!values?.confirmPassword){
          errors.confirmPassword = "Please enter valid confirm password!"
        }
        if(!((values?.confirmPassword && values?.password)  && values?.confirmPassword === values?.password)){
          console.log(values.password, values.confirmPassword)
          errors.confirmPassword = "Password not matching"
        }
        return errors;
      },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return {
    form,
  };
};

export default useSignupForm;
