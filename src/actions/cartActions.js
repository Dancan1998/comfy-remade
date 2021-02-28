import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../constants";

export const addToCart = (id, color, amount, product) => (
  dispatch,
  getState
) => {
  dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartContext.cart)
  );
  localStorage.setItem(
    "totalAmount",
    JSON.stringify(getState().cartContext.total_amount)
  );
  localStorage.setItem(
    "totalItems",
    JSON.stringify(getState().cartContext.total_items)
  );
};

export const removeItem = (id) => (dispatch, getState) => {
  dispatch({ type: REMOVE_CART_ITEM, payload: id });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartContext.cart)
  );
};

export const toggleAmount = (id, value) => (dispatch, getState) => {
  dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartContext.cart)
  );
};

export const clearCart = () => (dispatch, getState) => {
  dispatch({ type: CLEAR_CART });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartContext.cart)
  );
};
