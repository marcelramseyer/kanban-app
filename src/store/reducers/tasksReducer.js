import {
  CHANGE_LIST_TITLE,
  ADD_CARD,
  ADD_LIST,
  PERSIST_CARD_ORDER,
  FETCH_DATA,
} from '../actionsTypes';
import { v4 as uuidv4 } from 'uuid';

const initialStore = {
  amount: 10,
  count: 0,
  lists: [],
};

const rootReducer = (state = initialStore, action) => {
  if (action.type === FETCH_DATA) {
    return { ...state, lists: action.payload };
  }
  if (action.type === CHANGE_LIST_TITLE) {
    const newTitle = action.payload.Title;
    const newState = state.lists.map((list) => {
      if (list.id === action.payload.id) {
        return { ...list, title: newTitle };
      }
      return list;
    });
    return { ...state, lists: newState };
  }
  if (action.type === ADD_CARD) {
    const newCard = { text: action.payload.cardText, id: uuidv4() };
    const newState = state.lists.map((list) => {
      if (list.id === action.payload.listId) {
        return { ...list, cards: [...list.cards, newCard] };
      } else {
        return list;
      }
    });
    return { ...state, lists: newState };
  }
  if (action.type === ADD_LIST) {
    return {
      ...state,
      lists: [
        ...state.lists,
        { id: uuidv4(), title: action.payload, cards: [] },
      ],
    };
  }
  if (action.type === PERSIST_CARD_ORDER) {
    const { destination, source, type } = action.payload;
    const tempState = { ...state };
    if (type === 'list') {
      const list = tempState.lists.splice(source.index, 1);
      tempState.lists.splice(destination.index, 0, ...list);
      console.log(source.index, destination.index, list, tempState);
      return tempState;
    }
    if (source.droppableId === destination.droppableId) {
      const list = state.lists.find((list) => source.droppableId === list.id);
      const card = list.cards.splice(source.index, 1);
      list.cards.splice(destination.index, 0, ...card);
    }
    if (source.droppableId !== destination.droppableId) {
      const listStart = state.lists.find(
        (list) => source.droppableId === list.id
      );
      const card = listStart.cards.splice(source.index, 1);
      const listEnd = state.lists.find(
        (list) => destination.droppableId === list.id
      );
      listEnd.cards.splice(destination.index, 0, ...card);
    }
    return tempState;
  }
  return state;
};

export default rootReducer;
