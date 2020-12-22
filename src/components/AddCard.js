import React, { useState } from 'react';
import { ADD_CARD } from '../actions';
import { useDispatch } from 'react-redux';

const AddCard = ({ listId }) => {
  const dispatch = useDispatch();
  const [cardText, setCardText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen ? (
        <div>
          <input
            type="textarea"
            autoFocus
            value={cardText}
            onChange={(e) => setCardText(e.target.value)}
          />
          <button
            onClick={() => {
              setCardText('');
              dispatch({ type: ADD_CARD, payload: { cardText, listId } });
            }}
          >
            Hinzufügen
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>Abbrechen</button>
        </div>
      ) : (
        <button onClick={() => setIsOpen(!isOpen)}>+ Aufgabe hinzufügen</button>
      )}
    </>
  );
};

export default AddCard;
