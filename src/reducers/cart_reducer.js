import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../constants";

export const cartReducer = (
  state = {
    cart: [],
    total_amount: 0,
    total_items: 0,
    order_totals: 0,
    shipping_cost: 0,
  },
  action
) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempItem = state.cart.find((item) => item.id === id + color);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].image,
        price: product.price,
        max: product.countInStock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_amount, total_items } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amount = price * amount;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );

    state.shipping_cost = total_amount > 50000 ? 10000 : 20000;

    return {
      ...state,
      total_items,
      total_amount,
      order_totals: total_amount + state.shipping_cost,
    };
  }

  return state;
};
