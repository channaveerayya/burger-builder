import * as ACTION_TYPES from "./actionTypes";
import axios from 'axios';
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
      const authData = {
        email: email,
        password: password,
        returnSecureToken: true
      };
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB3qPVz_QMz6BSfbjlyxhWgntZdpG6206E",
          authData
        )
        .then(res => {
          console.log(res);
          dispatch(authSuccess(res.data));
        })
        .catch(error => {
          console.log(error);
          dispatch(authFail(error));
        });
  };
};
