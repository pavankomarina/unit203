import * as actionTypes from "../constants/cartConstants";

const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_CART_REQUEST:
      return {
        loading: true,
        cartItems: [],
      };
    case actionTypes.GET_CART_SUCCESS:
      return {
        cartItems: action.payload,
        loading: false,
      };
    case actionTypes.GET_CART_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
};
