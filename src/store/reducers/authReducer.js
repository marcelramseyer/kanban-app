import { SIGN_IN_USER, SIGN_OUT_USER } from '../actionsTypes';

const initialState = { authenticated: false, currentUser: null };

const authReducer = (state = initialState, { type, payload }) => {
  if (type === SIGN_IN_USER) {
    return {
      ...state,
      authenticated: true,
      currentUser: {
        email: payload.email,
        uid: payload.uid,
      },
    };
  }
  if (type === SIGN_OUT_USER) {
    return {
      ...state,
      authenticated: false,
      currentUser: null,
    };
  }

  return state;
};

export default authReducer;
