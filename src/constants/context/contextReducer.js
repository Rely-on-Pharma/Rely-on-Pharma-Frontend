export const snackBaractionTypes = {
  SHOW_SNACKBAR: "SHOW_SNACKBAR",
  HIDE_SNACKBAR: "HIDE_SNACKBAR",
};

export const initialState = {
  // snackbarstate
  snackBar: {
    open: false,
    message: "",
    severity: "info",
  },
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case snackBaractionTypes.SHOW_SNACKBAR:
      return {
        ...state,
        snackBar: {
          open: true,
          message: action.payload.message,
          severity: action.payload.severity || "info",
        },
      };
    case snackBaractionTypes.HIDE_SNACKBAR:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          open: false,
        },
      };
    default:
      return state;
  }
};

export default AppReducer;
