import { SIGN_IN_USER, SIGN_OUT_USER } from '../actionsTypes';
import firebase from '../../config/firebase';

export const signInUser = (payload) => {
  return async function (dispatch) {
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password);
      dispatch({ type: SIGN_IN_USER, payload: result.user });
    } catch (error) {
      throw error;
    }
  };
};

export const verifyAuth = () => {
  return function (dispatch) {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: SIGN_IN_USER, payload: user });
      } else {
        dispatch(signOutUser());
      }
    });
  };
};

export const signOutUser = () => {
  return {
    type: SIGN_OUT_USER,
  };
};
