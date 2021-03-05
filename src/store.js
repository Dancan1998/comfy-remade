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
import {
  userRegisterReducer,
  userLoginReducer,
  shippingProfileReducer,
  getShippingProfileReducer,
  loggedUserShippingProfileReducer,
} from "./reducers/user_reducer";

const reducer = combineReducers({
  sidebarContext: sidebarReducer,
  productsList: productsListReducer,
  singleProductContext: singleProductReducer,
  filterProducts: filterReducer,
  viewLayout: viewLayoutReducer,
  cartContext: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  shippingProfile: shippingProfileReducer,
  getShippingProfile: getShippingProfileReducer,
  getLoggedUserShippingProfile: loggedUserShippingProfileReducer,
});

const middleware = [thunk];

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cartContext: {
    cart: cartItemsFromStorage,
    total_amount: 0,
    total_items: 0,
    shipping_cost: 0,
    order_totals: 0,
  },
  userLogin: {
    userInfo: userInfoFromStorage,
    loading: false,
    error: false,
  },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
