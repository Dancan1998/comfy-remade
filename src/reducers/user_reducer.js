import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SHIPPING_PROFILE_REQUEST,
  USER_SHIPPING_PROFILE_SUCCESS,
  USER_SHIPPING_PROFILE_FAIL,
  GET_SHIPPING_PROFILE_REQUEST,
  GET_SHIPPING_PROFILE_SUCCESS,
  GET_SHIPPING_PROFILE_FAIL,
  LOGGED_USER_SHIPPING_PROFILE_REQUEST,
  LOGGED_USER_SHIPPING_PROFILE_SUCCESS,
  LOGGED_USER_SHIPPING_PROFILE_FAIL,
  LOGGED_USER_SHIPPING_PROFILE_RESET,
} from "../constants";

export const userLoginReducer = (
  state = { loading: false, error: false, userInfo: {} },
  action
) => {
  if (action.type === USER_LOGIN_REQUEST) {
    return {
      ...state,
      error: false,
      loading: true,
    };
  }
  if (action.type === USER_LOGIN_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: false,
      userInfo: action.payload,
    };
  }
  if (action.type === USER_LOGIN_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  if (action.type === USER_LOGOUT) {
    return {};
  }
  return state;
};

export const userRegisterReducer = (
  state = { loading: false, error: false, userInfo: {} },
  action
) => {
  if (action.type === USER_REGISTER_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === USER_REGISTER_SUCCESS) {
    return {
      ...state,
      loading: false,
      userInfo: action.payload,
    };
  }
  if (action.type === USER_REGISTER_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  return state;
};

export const shippingProfileReducer = (
  state = { loading: false, shippingInfo: {}, error: false },
  action
) => {
  if (action.type === USER_SHIPPING_PROFILE_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === USER_SHIPPING_PROFILE_SUCCESS) {
    return {
      ...state,
      loading: false,
      shippingInfo: action.payload,
    };
  }
  if (action.type === USER_SHIPPING_PROFILE_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};

export const getShippingProfileReducer = (
  state = { loading: false, error: false, getshippingProfile: [] },
  action
) => {
  if (action.type === GET_SHIPPING_PROFILE_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === GET_SHIPPING_PROFILE_SUCCESS) {
    return {
      ...state,
      loading: false,
      getshippingProfile: action.payload,
    };
  }
  if (action.type === GET_SHIPPING_PROFILE_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};

export const loggedUserShippingProfileReducer = (
  state = { loading: false, error: false, shippingProfile: {} },
  action
) => {
  if (action.type === LOGGED_USER_SHIPPING_PROFILE_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === LOGGED_USER_SHIPPING_PROFILE_SUCCESS) {
    return {
      ...state,
      loading: false,
      shippingProfile: action.payload,
    };
  }
  if (action.type === LOGGED_USER_SHIPPING_PROFILE_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  if (action.type === LOGGED_USER_SHIPPING_PROFILE_RESET) {
    return {};
  }
  return state;
};
