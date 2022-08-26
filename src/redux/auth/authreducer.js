import * as types from "./actionType.js";

const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: "",
  username:""
};

export const authreducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SIGNUP_REQUEST: {
      return {
        ...state,
        isLoading: true,
      
      };
    }
    case types.SIGNUP_SUCCESS: {

      return {
        ...state,
        isLoading: false,
      };
    }
    case types.SIGNUP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.GET_LOGIN_LOADING: {
      return {
        ...state,
        username:payload,
        isLoading: true,
      };
    }
    case types.GET_LOGIN_SUCCESS: {
    //   console.log("yes done");
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
      };
    }
    case types.GET_LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: "",
        isError: payload,
      };
    }

    default:
      return state;
  }
};