import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  sidebarReducer,
  productsListReducer,
  singleProductReducer,
} from "./reducers/products_reducer";
import { filterReducer, viewLayoutReducer } from "./reducers/filter_reducer";
import { cartReducer } from "./reducers/cart_reducer";

const reducer = combineReducers({
  sidebarContext: sidebarReducer,
  productsList: productsListReducer,
  singleProductContext: singleProductReducer,
  filterProducts: filterReducer,
  viewLayout: viewLayoutReducer,
  cartContext: cartReducer,
});

const middleware = [thunk];

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartContext: {
    cart: cartItemsFromStorage,
    total_amount: 0,
    total_items: 0,
  },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// const totalAmountFromStorage = localStorage.getItem("totalAmount")
//   ? JSON.parse(localStorage.getItem("totalAmount"))
//   : 0;

// const totalItemsFromStorage = localStorage.getItem("totalItems")
//   ? JSON.parse(localStorage.getItem("totalItems"))
//   : 0;
