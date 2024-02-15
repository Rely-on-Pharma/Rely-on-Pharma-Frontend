"use client";
import React, { useEffect, useReducer } from "react";
import AppContext from "./context";
import AppReducer, { initialState } from "./contextReducer";

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //   useeffects to handle user auth
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch({ type: "LOGIN", payload: { user: JSON.parse(storedUser) } });
    }
  }, []);

  // Update localStorage when the user state changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  const value = {
    // snackbar state values
    snackBar: {
      open: state.snackBar.open,
      message: state.snackBar.message,
      severity: state.snackBar.severity,
    },
    //auth user
    user: {
      isAuthenticated: state.user.isAuthenticated,
      data: state.user.data,
    },
    // functions
    // snackbar functions
    showSnackbar: (snackBarMessage, snackBarType) => {
      dispatch({
        type: "SHOW_SNACKBAR",
        payload: { message: snackBarMessage, severity: snackBarType },
      });
    },
    hideSnackbar: () => {
      dispatch({ type: "HIDE_SNACKBAR" });
    },

    //auth functions
    loginUser: (user) => {
      dispatch({
        type: "LOGIN",
        payload: { user },
      });
    },
    logOutUser: () => {
      dispatch({
        type: "LOGOUT",
      });
    },
  };

  return (
    <AppContext.Provider value={value}>
      {/* created seperate value object to pass state and function at once otherwise whould have do like this{ ...state, showSnackbar, hideSnackbar }  */}
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

// we will call the functions and values in our component from here like showsnackbar from here we will dispatch reducer function with type and payload
// this will make a call to our reducer where we will update our global state variables we will match which one function to call based on type and can access the payload.
