import React from 'react';
import { FiCircle } from 'react-icons/fi';
import { Draggable } from 'react-beautiful-dnd';

const Card = (props) => {
  return (
    <Draggable draggableId={String(props.id)} index={props.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="flex text-sm shadow-sm hover:shadow-md transition duration-300
 bg-white px-3 py-3 h-20 w-72 mb-4 rounded border border-gray-300"
        >
          <span className="mr-2">
            <FiCircle className="h-5 w-5 stroke-1" />
          </span>
          {props.text}
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1">
              blue
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
