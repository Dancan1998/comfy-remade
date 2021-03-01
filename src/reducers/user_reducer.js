import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
} from "../constants";

export const userLoginReducer = (
  state = { loading: false, error: false, userInfo: {} },
  action
) => {
  if (action.type === USER_LOGIN_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === USER_LOGIN_SUCCESS) {
    return {
      ...state,
      loading: false,
      userInfo: action.payload,
    };
  }
  if (action.type === USER_LOGIN_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};
