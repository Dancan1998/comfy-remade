import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../constants";

export const filterReducer = (
  state = {
    loading: false,
    error: null,
    filtered_products: [],
    all_products: [],
  },
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
      filtered_products: [...action.payload],
      all_products: [...action.payload],
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
