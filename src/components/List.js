import React from 'react';
import Card from './Card';
import Title from './Title';
import AddCard from './AddCard';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const List = ({ id, index, title, cards }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(id)}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="mr-6 w-72"
              >
                <Title title={title} id={id} cards={cards} />
                {cards.map((card, index) => (
                  <Card key={card.id} {...card} index={index} id={card.id} />
                ))}
                {provided.placeholder}
                <AddCard listId={id} />
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default List;
