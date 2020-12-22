import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { Draggable } from 'react-beautiful-dnd';

const Card = (props) => {
  return (
    <Draggable draggableId={String(props.id)} index={props.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="flex text-sm bg-white px-8 py-6 w-72 mb-4 rounded-lg shadow-md"
        >
          <span className="text-base">
            <BiCheckCircle />
          </span>
          {props.text}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
