import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  sidebarReducer,
  productsListReducer,
  singleProductReducer,
} from "./reducers/products_reducer";
import { filterReducer, viewLayoutReducer } from "./reducers/filter_reducer";
import { cartReducer } from "../reducers/cart_reducer";

const reducer = combineReducers({
  sidebarContext: sidebarReducer,
  productsList: productsListReducer,
  singleProductContext: singleProductReducer,
  filterProducts: filterReducer,
  viewLayout: viewLayoutReducer,
  cartContext: cartReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
