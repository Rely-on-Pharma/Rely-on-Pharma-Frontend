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
    dispatch({ type: 'LOGIN', payload: { user } });
  };
  
  const logOutUser = (dispatch) => {
    dispatch({ type: 'LOGOUT' });
  };
  
  const updateCart = (dispatch, newCart) => {
    dispatch({ type: 'UPDATE_CART', payload: { newCart } });
  };
  
  const applyFilter = (dispatch, filters) => {
    dispatch({ type: 'APPLY_FILTER', payload: { filters } });
  };
  
  const resetFilters = (dispatch) => {
    dispatch({ type: 'RESET_FILTERS' });
  };
  
  export {
    showSnackbar,
    hideSnackbar,
    loginUser,
    logOutUser,
    updateCart,
    applyFilter,
    resetFilters,
  };
  