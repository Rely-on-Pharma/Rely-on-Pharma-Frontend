"use client";
import React, { useEffect, useReducer } from "react";
import AppContext from "./context";
import AppReducer, { initialState } from "./contextReducer";
import { showSnackbar,
  hideSnackbar,
  loginUser,
  logOutUser,
  updateCart,
  applyFilter,
  resetFilters,
  addToCart,
  incrementQty,
  decrementQty,
  removeItem,} from "./contextFunctions";
import { useAuthEffect, useLocalStorageEffect, useCartUpdatedEffect } from "./contextUseEffects";
import { productData } from "../data/productData";

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
   // Effects
   useAuthEffect( state.user,dispatch);
   useLocalStorageEffect(state.user, dispatch);
   useCartUpdatedEffect(state.cartUpdated, dispatch);

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

    //shop
    cart:state.cart,
    products:state.products,
    filteredProducts:state.filteredProducts,
    cartUpdated:state.cartUpdated,
     
    // functions
    // snackbar functions
    showSnackbar: (message, severity) => showSnackbar(dispatch, message, severity),
    hideSnackbar: () => hideSnackbar(dispatch),
    loginUser: (user) => loginUser(dispatch, user),
    logOutUser: () => logOutUser(dispatch),
    updateCart: (newCart) => updateCart(dispatch, newCart),
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
