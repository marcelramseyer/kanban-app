import React from 'react';
import ListContainer from './components/ListContainer';
import { DragDropContext } from 'react-beautiful-dnd';

import { useDispatch } from 'react-redux';
import { PERSIST_CARD_ORDER } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    dispatch({
      type: PERSIST_CARD_ORDER,
      payload: {
        source,
        destination,
        draggableId,
        type,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="p-8">
        <p className="text-xl	font-bold py-8">Kanban Board</p>
        <ListContainer />
      </div>
    </DragDropContext>
  );
};

export default App;
