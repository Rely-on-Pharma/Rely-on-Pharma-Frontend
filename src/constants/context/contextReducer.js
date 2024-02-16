export const snackBaractionTypes = {
  SHOW_SNACKBAR: "SHOW_SNACKBAR",
  HIDE_SNACKBAR: "HIDE_SNACKBAR",
};
export const authactionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};
export const leadactionTypes = {
  ADD_LEAD: "ADD_LEAD",
  REMOVE_LEAD: "REMOVE_LEAD",
};

export const initialState = {
  //user
  user: {
    isAuthenticated: false,
    data: null,
  },
  //lead
  hasLead: false,

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
        snackBar: {
          ...state.snackbar,
          open: false,
        },
      };
    case authactionTypes.LOGIN: {
      const newUserState = {
        isAuthenticated: true,
        data: action.payload.user,
      };
      localStorage.setItem("user", JSON.stringify(newUserState));
      return {
        ...state,
        user: newUserState,
      };
    }
    case authactionTypes.LOGOUT: {
      localStorage.removeItem("user");
      return {
        ...state,
        user: {
          isAuthenticated: false,
          data: null,
        },
      };
    }
    default:
      return state;
  }
};

export default AppReducer;
