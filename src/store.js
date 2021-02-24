import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  sidebarReducer,
  productsListReducer,
  singleProductReducer,
} from "./reducers/products_reducer";

const reducer = combineReducers({
  sidebarContext: sidebarReducer,
  productsList: productsListReducer,
  singleProductContext: singleProductReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
