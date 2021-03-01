import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants";
import http from "../http-common";

export const login = () => async (dispatch) => {};

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
      payload: error.response.data,
    });
  }
};
