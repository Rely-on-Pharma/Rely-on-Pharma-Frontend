import { authactionTypes, cartActionTypes } from "./contextReducer";

// contextFunctions.js
const showSnackbar = (dispatch, snackBarMessage, snackBarType) => {
    dispatch({
      type: 'SHOW_SNACKBAR',
      payload: { message: snackBarMessage, severity: snackBarType },
    });
  };
  
  const hideSnackbar = (dispatch) => {
    dispatch({ type: 'HIDE_SNACKBAR' });
  };
  
  const loginUser = (dispatch, user) => {
    console.log("Dispatch received:", dispatch);
    console.log("User received:", user);
    dispatch({ type: authactionTypes.LOGIN, payload: { user } });
  };
  
  const logOutUser = (dispatch) => {
    dispatch({ type: authactionTypes.LOGOUT });
  };
  
  const applyFilter = (dispatch, filters) => {
    dispatch({ type: 'APPLY_FILTER', payload: { filters } });
  };
  
  const resetFilters = (dispatch) => {
    dispatch({ type: 'RESET_FILTERS' });
  };
  const addToCart = (dispatch, productData, qty) => {
    dispatch({ type: cartActionTypes?.ADD_TO_CART, payload: {productData, qty} });
  };

  const incrementQty = (dispatch, productId) =>{
    dispatch({type: cartActionTypes?.INCREMENT_QYT, payload:{itemId: productId}});
  }
  const decrementQty = (dispatch, productId) =>{
    dispatch({type: cartActionTypes?.DECREMENT_QYT, payload:{itemId: productId}});
  }
  const removeItem = (dispatch, productId) =>{
    dispatch({type: cartActionTypes?.REMOVE_FROM_CART, payload:{itemId: productId}});
  }
  export {
    showSnackbar,
    hideSnackbar,
    loginUser,
    logOutUser,
    applyFilter,
    resetFilters,
    addToCart,
    incrementQty,
    decrementQty,
    removeItem
  };
  