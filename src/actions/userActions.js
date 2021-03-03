import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
  USER_SHIPPING_PROFILE_REQUEST,
  USER_SHIPPING_PROFILE_SUCCESS,
  USER_SHIPPING_PROFILE_FAIL,
} from "../constants";
import http from "../http-common";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = await http.post(
      "/api/auth/login",
      { email, password },
      config
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response ? error.response.data : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const register = (
  email,
  first_name,
  last_name,
  password,
  password1
) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = await http.post(
      "/api/auth/register",
      { email, first_name, last_name, password, password1 },
      config
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response ? error.response.data : error.message,
    });
  }
};

export const shipping = (county, town, contact) => async (dispatch) => {
  try {
    dispatch({ type: USER_SHIPPING_PROFILE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = await http.post(
      "/api/shipping",
      { county, town, contact },
      config
    );

    dispatch({ type: USER_SHIPPING_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_SHIPPING_PROFILE_FAIL,
      payload: error.response ? error.response.data : error.message,
    });
  }
};
