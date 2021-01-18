import React from 'react';
import { useDispatch } from 'react-redux';
import { PERSIST_CARD_ORDER } from '../store/actionsTypes';
import ListContainer from '../components/ListContainer';
import { DragDropContext } from 'react-beautiful-dnd';

function Project() {
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
    <div className="h-full">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="p-8 h-full">
          {/* <p className="text-xl py-8">Kanban Board</p> */}
          <ListContainer />
        </div>
      </DragDropContext>
    </div>
  );
}

export default Project;
