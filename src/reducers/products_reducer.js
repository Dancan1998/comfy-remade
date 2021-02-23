import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../constants";

export const sidebarReducer = (state = { isSidebarOpen: false }, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return {
      ...state,
      isSidebarOpen: true,
    };
  }

  if (action.type === SIDEBAR_CLOSE) {
    return {
      ...state,
      isSidebarOpen: false,
    };
  }

  return state;
};

export const productsListReducer = (
  state = { loading: false, products: [], error: false },
  action
) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === GET_PRODUCTS_SUCCESS) {
    return {
      ...state,
      loading: false,
      products: action.payload,
    };
  }

  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};
