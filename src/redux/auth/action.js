
import * as types from "./actionType";
import axios from "axios";
export const signUpRegister = (payload) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/register", payload)
    .then((r) => {
      dispatch({ type: types.SIGNUP_SUCCESS, payload: r.data });
      return types.SIGNUP_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.SIGNUP_FAILURE });
      return types.SIGNUP_FAILURE;
    });
};

export const loginData = (payload) => (dispatch) => {
  dispatch({ type: types.GET_LOGIN_LOADING, payload: payload.username });
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/login", payload)
    .then((r) => {
      dispatch({ type: types.GET_LOGIN_SUCCESS, payload: r.data.token });
      return types.GET_LOGIN_SUCCESS;
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.GET_LOGIN_FAILURE });
      return types.GET_LOGIN_FAILURE;
    });
};