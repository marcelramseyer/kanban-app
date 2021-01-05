import React, { useState } from 'react';
import { addCard } from '../store/actions/tasksActions';
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
              dispatch(addCard({ cardText, listId }));
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
