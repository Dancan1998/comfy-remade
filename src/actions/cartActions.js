import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../constants";

export const addToCart = (id, color, amount, product) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
};
