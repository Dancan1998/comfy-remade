import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  sidebarReducer,
  productsListReducer,
} from "./reducers/products_reducer";

const reducer = combineReducers({
  sidebarContext: sidebarReducer,
  productsList: productsListReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
