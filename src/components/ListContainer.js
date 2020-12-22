import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from './List';
import { ADD_LIST } from '../actions';
import { Droppable } from 'react-beautiful-dnd';

const ListContainer = () => {
  const dispatch = useDispatch();
  const [listTitle, setListTitle] = useState();
  const lists = useSelector((state) => state);
  return (
    <div>
      <Droppable droppableId="lists" direction="horizontal" type="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <div className="flex">
              {lists.lists.map((items, index) => (
                <List {...items} key={items.id} index={index} />
              ))}

              {provided.placeholder}
              <input
                type="text"
                onChange={(e) => setListTitle(e.target.value)}
              />
              <button
                onClick={() => dispatch({ type: ADD_LIST, payload: listTitle })}
              >
                Abschnitt hinzufügen
              </button>
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ListContainer;
