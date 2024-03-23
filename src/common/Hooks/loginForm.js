import { useFormik } from "formik";

const useLoginForm = (handleSubmit) => {
  const form = useFormik({
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: {
      email: "",
      password: "",

    },
    validate: (values) => {
        const errors = {};
        if(!values?.email){
          errors.email = "Email Required"
        }
        if(!values?.password){
            errors.password = "Password is mandatory"
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

export default useLoginForm;
