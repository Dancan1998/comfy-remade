import {
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
import http from "../http-common";

export const filterProductslist = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_BEGIN });

    const { data } = await http.get("/api/products");

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const setGridView = () => (dispatch) => {
  dispatch({ type: SET_GRIDVIEW });
};

export const setListView = () => (dispatch) => {
  dispatch({ type: SET_LISTVIEW });
};

export const updateSort = (e) => (dispatch) => {
  const value = e.target.value;
  dispatch({ type: UPDATE_SORT, payload: value });
};

export const sortProducts = () => (dispatch) => [
  dispatch({ type: SORT_PRODUCTS }),
];

export const updateFilters = (e) => (dispatch) => {
  let value = e.target.value;
  let name = e.target.name;
  dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
};

export const clearFilters = () => (dispatch) => {};

export const filteringProducts = () => (dispatch) => {
  dispatch({ type: FILTER_PRODUCTS });
};
