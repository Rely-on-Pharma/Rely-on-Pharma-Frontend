
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
export const shopActionTypes = {
  APPLY_FILTER: 'APPLY_FILTER',
  UPDATE_CART: 'UPDATE_CART',
  RESET_FILTERS: 'RESET_FILTERS',
  RESET_CART_UPDATED: 'RESET_CART_UPDATED',
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

  //shop
  products:[],
  filteredProducts:[],
  cart:[],
  cartUpdated:false
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
    case shopActionTypes.APPLY_FILTER:{
      const {filters} = action.payload;
      let filtered = [...state.products]; //get all products
      //apply filters

      if(filters?.sortBy === 'highToLow'){
        //sort high to low
        filtered?.sort((item1, item2)=> item2.price - item1.price);
      }
      else{
        filtered?.sort((item1, item2)=> item1.price - item2.price);
      }

      //filter based on company
      if(filters?.companyName){
        filtered = filtered?.filter((item)=>  item?.company === filters?.companyName)
      }

      //filter based on category
      if( filters?.category ){
        filtered = filtered?.filter((item)=> item?.category === filters?.category);
      }

      return  {
         ...state,
         filteredProducts : filtered
      }
    }

    case shopActionTypes.RESET_FILTERS: {
      return {
        ...state,
        filteredProducts:state.products,
      }
    }
    case shopActionTypes.UPDATE_CART: {
      const {newCart} = action.payload;
      return {
        ...state,
        cart: newCart,
        cartUpdated:true
      }
    }
    case shopActionTypes.RESET_CART_UPDATED:
      return { ...state, cartUpdated: false };
    default:
      return state;
  }
};

export default AppReducer;
