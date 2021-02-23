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

export const openSidebar = () => (dispatch) => {
  dispatch({ type: SIDEBAR_OPEN });
};

export const closeSidebar = () => (dispatch) => {
  dispatch({ type: SIDEBAR_CLOSE });
};
