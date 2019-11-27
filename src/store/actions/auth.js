import * as ACTION_TYPES from "./actionTypes";
import axios from 'axios';
export const authStart = () => {
  return {
    type: ACTION_TYPES.AUTH_START
  };
};

export const authSuccess = (token,userId) => {
  return {
    type: ACTION_TYPES.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};
export const logout = () => { 
  return {
    type: ACTION_TYPES.AUTH_LOGOUT
  };
}
export const authFail = error => {
  return {
    type: ACTION_TYPES.AUTH_FAIL,
    error: error
  };
};
export const checkAuthTimeOut = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  }
 };
export const auth = (email, password,isSignUp) => {
  return dispatch => {
      dispatch(authStart());
      const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    };
    let URL =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB3qPVz_QMz6BSfbjlyxhWgntZdpG6206E";
    if (!isSignUp) {
      URL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB3qPVz_QMz6BSfbjlyxhWgntZdpG6206E";
    }
    axios
      .post(URL, authData)
      .then(res => {
        dispatch(authSuccess(res.data.idToken, res.data.localId));
        dispatch(checkAuthTimeOut(res.data.expiresIn));
      })
      .catch(error => {
        dispatch(authFail(error.response.data.error));
      });
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: ACTION_TYPES.SET_AUTH_REDIRECT_PATH,
    path: path
  };
}