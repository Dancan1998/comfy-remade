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
import http from "../http-common";

export const openSidebar = () => (dispatch) => {
  dispatch({ type: SIDEBAR_OPEN });
};

export const closeSidebar = () => (dispatch) => {
  dispatch({ type: SIDEBAR_CLOSE });
};

export const productslist = () => async (dispatch) => {
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
