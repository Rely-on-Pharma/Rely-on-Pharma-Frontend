import AppContext from "@/constants/context/context";
import { useFormik } from "formik";
import { useContext } from "react";

const useLoginForm = (router) => {
  const {showSnackbar,  loginUser} = useContext(AppContext)
    const handleSubmit = async (values) => {
      try {
        const loginData = {
          email: values.email,
          password: values.password,
        };
  
        const response = await fetch("http://localhost:8000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        });
  
        if (!response.ok) {
          if (response.status === 404) {
            showSnackbar("Unknown user", "error");
            throw new Error("Unknown user");
          }
          throw new Error("Failed to login");
        }
  
        const data = await response.json();
        localStorage.setItem("token", data.token);
        loginUser(data?.token)
        router.push("/");
        showSnackbar("Logged in successfully", "success");
      } catch (error) {
        console.error("Error logging in:", error?.message);
        showSnackbar("Failed to login", "error");
      }
    };
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
