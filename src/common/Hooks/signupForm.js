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
        if (!values?.phoneNumber?.toString()) {
          errors.phoneNumber = "Mobile Number is Mandatory";
        }
        if (values?.phoneNumber?.toString()?.length !== 10) {
          errors.phoneNumber = "Enter a valid 10 digit Mobile Number";
        }
        if (values?.phoneNumber && values?.phoneNumber[0] < 5) {
          errors.agentMobileNo = "Enter Valid Mobile Number";
        }
        if(!values?.password){
            errors.password = "Password is mandatory"
        }
        if(!values?.confirmPassword){
          errors.confirmPassword = "Please enter valid confirm password!"
        }
        if((values?.confirmPassword && values?.password)  && values?.confirmPassword === values?.password){
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
