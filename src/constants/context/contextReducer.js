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
  APPLY_FILTER: "APPLY_FILTER",
  UPDATE_CART: "UPDATE_CART",
  RESET_FILTERS: "RESET_FILTERS",
  RESET_CART_UPDATED: "RESET_CART_UPDATED",
};

export const cartActionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  INCREMENT_QYT: "INCREMENT_QTY",
  DECREMENT_QYT: "DECREMENT_QTY",
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
  products: [],
  filteredProducts: [],
  cart: [
    { id: 1, name: "Product 1", image: "https://loremflickr.com/640/480?lock=6586178289532928", price: 10, qty: 2 },
    { id: 2, name: "Product 2", image: "https://loremflickr.com/640/480?lock=6586178289532928", price: 20, qty: 1 },
    { id: 3, name: "Product 3", image: "https://loremflickr.com/640/480?lock=6586178289532928", price: 15, qty: 3 }
  ],
  cartUpdated: false,
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
    case shopActionTypes.APPLY_FILTER: {
      const { filters } = action.payload;
      let filtered = [...state.products]; //get all products
      //apply filters

      if (filters?.sortBy === "highToLow") {
        //sort high to low
        filtered?.sort((item1, item2) => item2.price - item1.price);
      } else {
        filtered?.sort((item1, item2) => item1.price - item2.price);
      }

      //filter based on company
      if (filters?.companyName) {
        filtered = filtered?.filter(
          (item) => item?.company === filters?.companyName
        );
      }

      //filter based on category
      if (filters?.category) {
        filtered = filtered?.filter(
          (item) => item?.category === filters?.category
        );
      }

      return {
        ...state,
        filteredProducts: filtered,
      };
    }

    case shopActionTypes.RESET_FILTERS: {
      return {
        ...state,
        filteredProducts: state.products,
      };
    }
    case shopActionTypes.UPDATE_CART: {
      const { newCart } = action.payload;
      return {
        ...state,
        cart: newCart,
        cartUpdated: true,
      };
    }
    case shopActionTypes.RESET_CART_UPDATED:
      return { ...state, cartUpdated: false };

      case cartActionTypes.ADD_TO_CART: {
        const existingProductIndex = state.cart.findIndex(item => item.id === action.payload.productData?.id);
        if (existingProductIndex !== -1) {
          // Product already exists in the cart, update the quantity
          const updatedCart = [...state.cart];
          updatedCart[existingProductIndex].qty = action.payload.qty;
          return {
            ...state,
            cart: updatedCart
          };
        } else {
          // Product not in cart, add it
          return {
            ...state,
            cart: [...state.cart, { ...action.payload.productData, qty: action.payload.qty }]
          };
        }
      }
    case cartActionTypes.REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart?.filter((c) => c?.id !== action.payload.itemId),
      };
    }
    case cartActionTypes.INCREMENT_QYT: {
      const { itemId } = action.payload;
      const index = state.cart?.findIndex(item => item.id === itemId);
      if (index !== -1) {
        const updatedCartItems = [...state.cart];
        updatedCartItems[index] = {
          ...updatedCartItems[index],
          qty: updatedCartItems[index].qty + 1
        };
        return {
          ...state,
          cart: updatedCartItems
        };
      }
      // If item not found, return state as is
      return state;
    }
    
    case cartActionTypes.DECREMENT_QYT:{
      const {itemId} = action.payload;
      const index = state.cart?.findIndex(item => item.id === itemId);
      if (index !== -1) {
        const updatedCartItems = [...state.cart];
        if(updatedCartItems[index]?.qty === 1){
          updatedCartItems?.splice(index,1);
        }
        else{
          updatedCartItems[index] = {
            ...updatedCartItems[index],
            qty: updatedCartItems[index].qty - 1
          };
        }
        return {
          ...state, 
          cart: updatedCartItems
        }
      }
      return state;
    }

    default:
      return state;
  }
};

export default AppReducer;
