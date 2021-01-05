import { ADD_CARD, FETCH_DATA } from '../actionsTypes';
import { addCardToFirestore } from '../../firestore/firestoreService';

export const addCard = (payload) => {
  return (dispatch) => {
    addCardToFirestore(payload.cardText);
    dispatch({ type: ADD_CARD, payload });
  };
};

export const updateStore = (payload) => {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA, payload });
  };
};
