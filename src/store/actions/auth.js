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
  localStorage.removeItem('token');
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
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
        const expirationDate = new Date(
          new Date().getTime() + res.data.expiresIn * 1000
        );
        localStorage.setItem('token', res.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", res.data.localId);
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


  export const authCheckState = () => {
    return dispatch => {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch(logout());
      } else {
        const expirationDate = new Date(localStorage.getItem("expirationDate"));
        if (expirationDate <= new Date()) {
          dispatch(logout());
        } else {
          const userId = localStorage.getItem('userId');
          dispatch(authSuccess(token, userId));
          dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000));
        }
      }
    };
  };