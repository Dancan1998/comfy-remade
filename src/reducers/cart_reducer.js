import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../constants";

export const cartReducer = (
  state = { cart: [], total_amount: 0, total_items: 0, shipping_fee: 534 },
  action
) => {
  return state;
};
