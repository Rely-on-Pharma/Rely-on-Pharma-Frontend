import React, { useReducer } from "react";
import AppContext from "./context";
import AppReducer, { initialState } from "./contextReducer";

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const value = {
    // snackbar state values
    openSnackBar: state.snackBar.open,
    snackBarMessage: state.snackBar.message,
    snackBarType: state.snackBar.severity,

    // functions
    // snackbar functions
    showSnackbar: (snackBarMessage, snackBarType) => {
      dispatch({
        type: "SHOW_SNACKBAR",
        payload: { message:snackBarMessage, severity:snackBarType },
      });
    },
    hideSnackbar: () => {
      dispatch({ type: "HIDE_SNACKBAR" });
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
