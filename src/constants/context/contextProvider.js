"use client";
import React, { useEffect, useReducer } from "react";
import AppContext from "./context";
import AppReducer, { authactionTypes, initialState } from "./contextReducer";
import { showSnackbar,
  hideSnackbar,
  loginUser,
  logOutUser,
  applyFilter,
  resetFilters,
  addToCart,
  incrementQty,
  decrementQty,
  removeItem,} from "./contextFunctions";

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
   // Effects
   useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      dispatch({ type: authactionTypes.LOGIN, payload: { user: JSON.parse(storedUser) } });
    }
  }, []);

  const value = {
    // snackbar state values
    snackBar: {
      open: state.snackBar.open,
      message: state.snackBar.message,
      severity: state.snackBar.severity,
    },
    //auth user
    user: state.user,

    //shop
    cart:state.cart,
    products:state.products,
    filteredProducts:state.filteredProducts,
     
    // functions
    // snackbar functions
    showSnackbar: (message, severity) => showSnackbar(dispatch, message, severity),
    hideSnackbar: () => hideSnackbar(dispatch),
    loginUser: (user) => loginUser(dispatch, user),
    logOutUser: () => logOutUser(dispatch),

    applyFilter: (filters) => applyFilter(dispatch, filters),
    resetFilters: () => resetFilters(dispatch),
    addToCart: (productData,qty)=> addToCart(dispatch, productData,qty),
    incrementQty: (productId)=> incrementQty(dispatch, productId),
    decrementQty: (productId)=> decrementQty(dispatch, productId),
    removeItem: (productId)=> removeItem(dispatch, productId)
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
