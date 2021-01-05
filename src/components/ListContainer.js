import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from './List';
import { ADD_LIST } from '../store/actionsTypes';
import { Droppable } from 'react-beautiful-dnd';
import {
  getTasksFormFirestore,
  dataFromSnapshot,
} from '../firestore/firestoreService';
import { updateStore } from '../store/actions/tasksActions';

const ListContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = getTasksFormFirestore({
      next: (snapshot) =>
        dispatch(
          updateStore(
            snapshot.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot))
          )
        ),
      error: (error) => console.log(error),
    });
    return unsubscribe;
  }, [dispatch]);

  const [listTitle, setListTitle] = useState();
  const lists = useSelector((state) => state.tasks);
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
