import axios from "axios";
import * as types from "./actionType.js";

export const getData = (token, username) => (dispatch) => {
  dispatch({ type: types.EMPLOYEES_DATA_LOADING });
  axios
    .get(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: types.EMPLOYEES_DATA_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      dispatch({ type: types.EMPLOYEES_DATA_FAILURE });
    });
};

export const patientData = () => (dispatch) => {
  dispatch({ type: types.PATIENTS_DATA_LOADING });
  axios
    .get(`https://form-database123.herokuapp.com/patients`)
    .then((res) => {
      dispatch({ type: types.PATIENTS_DATA_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      dispatch({ type: types.PATIENTS_DATA_FAILURE });
    });
};

export const deleteItem = (id) => (dispatch) => {
  axios
    .delete(`https://form-database123.herokuapp.com/employee/${id}`)
    .then((res) => {
      dispatch({ type: types.DELETE_DATA, payload: id });
    });
};
