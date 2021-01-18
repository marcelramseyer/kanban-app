import { SIGN_IN_USER, SIGN_OUT_USER } from '../actionsTypes';
import firebase from '../../config/firebase';
import { APP_LOADED } from '../reducers/asyncReducer';

export const signInUser = (user) => {
  return {
    type: SIGN_IN_USER,
    payload: user,
  };
};

export const verifyAuth = () => {
  return function (dispatch) {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(signInUser(user));
        dispatch({ type: APP_LOADED });
      } else {
        dispatch(signOutUser());
        dispatch({ type: APP_LOADED });
      }
    });
  };
};

export const signOutUser = () => {
  return {
    type: SIGN_OUT_USER,
  };
};
