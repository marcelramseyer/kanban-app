import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from './List';
import { ADD_LIST } from '../store/actionsTypes';
import { Droppable } from 'react-beautiful-dnd';
import {
  getTasksFormFirestore,
  dataFromSnapshot,
  getProjectsFormFirestore,
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
    const unsubscribe_projects = getProjectsFormFirestore({
      next: (snapshot) =>
        snapshot.docs.map((docSnapshot) => console.log(docSnapshot.data())),
      error: (error) => console.log(error),
    });
    return { unsubscribe, unsubscribe_projects };
  }, [dispatch]);

  const [listTitle, setListTitle] = useState();
  const lists = useSelector((state) => state.tasks);
  return (
    <div className="text-gray-900 h-full">
      <Droppable droppableId="lists" direction="horizontal" type="list">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex items-stretch h-full"
          >
            <div className="flex items-stretch h-full">
              {lists.lists.map((items, index) => (
                <List {...items} key={items.id} index={index} />
              ))}

              {provided.placeholder}
              <input
                className="h-8"
                type="text"
                onChange={(e) => setListTitle(e.target.value)}
              />
              <button
                className="text-gray-600"
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
