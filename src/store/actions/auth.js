import * as ACTION_TYPES from "./actionTypes";

export const authStart = () => {
  return {
    type: ACTION_TYPES.AUTH_START
  };
};

export const authSuccess = authData => {
  return {
    type: ACTION_TYPES.AUTH_SUCCESS,
    authData: authData
  };
};

export const authFail = error => {
  return {
    type: ACTION_TYPES.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
  };
};
