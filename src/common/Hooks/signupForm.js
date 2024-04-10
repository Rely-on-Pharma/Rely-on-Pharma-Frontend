import AppContext from "@/constants/context/context";
import { useFormik } from "formik";
import { useContext } from "react";

const useSignupForm = (router, isAdmin) => {
  const {showSnackbar, hideSnackbar,loginUser} = useContext(AppContext)
  const handleSubmit = async (values, { setSubmitting }) =>{
    const registerData = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      password: values.password,
    };
    let apiEndPoint = isAdmin ? "http://localhost:8000/admin/register" : "http://localhost:8000/register";
    fetch(apiEndPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registerData)
    })
    .then(response => {
      if (!response.ok) {
          if(response.status === 404){
              throw new Error("unknown user"); //TODO: What UI element to add here? popup?
          }

        throw new Error('Failed to login');
      }
      return response.json();
    })
    .then(data => {
      showSnackbar("Account Created Successfully", "success")
      localStorage.setItem('token', data.token);
      loginUser(data?.token) // Assuming response contains the token
      router.push(isAdmin ? "/admin/dashboard" : "/");

      // Store the token securely (e.g., in localStorage)
    })
    .catch(error => {
      showSnackbar("Failed to create an account", "error")
      console.error('Error logging in:', error);
    });
  }
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
    onSubmit: handleSubmit,
  });

  return {
    form,
  };
};

export default useSignupForm;
