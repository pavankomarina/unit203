import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const getCart = (postalCode) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_CART_REQUEST });

    const { data } = await axios.get(`/api/cart${postalCode ? '?postalCode=' + postalCode : ''}`);

    dispatch({
      type: actionTypes.GET_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CART_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addToCart = (product) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: product,
  });
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
};
