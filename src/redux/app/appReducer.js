import * as types from "./actionType.js";

const initialState = {
  Employees: [],
  isLoading: false,
  isError: false,
  data:[]
};

export const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.EMPLOYEES_DATA_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.EMPLOYEES_DATA_SUCCESS: {
      console.log("yes done");
      return {
        ...state,
        Employees: payload,
        isLoading: false,
      };
    }
    case types.EMPLOYEES_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.PATIENTS_DATA_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.PATIENTS_DATA_SUCCESS: {
     
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    }
    case types.PATIENTS_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    // case types.DELETE_DATA: {
    //   const newdata = state.allEmployees.filter((item) => {
    //     return item.id != payload;
    //   });
    //   return {
    //     ...state,
    //     allEmployees: newdata,
    //   };
    // }
    default:
      return state;
  }
};