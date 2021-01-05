import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CHANGE_LIST_TITLE } from '../store/actionsTypes';

const Title = ({ id, title, cards }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const [Title, setTitle] = useState(title);
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const changeTitle = (e) => {
    if (e.keyCode === 13) {
      setIsOpen(!isOpen);
      dispatch({ type: CHANGE_LIST_TITLE, payload: { id, Title } });
    }
  };
  const toggle = () => {
    if (isOpen) {
      return (
        <div
          className="font-bold cursor-pointer pb-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex">
            <div>{title}</div>
            <div className="pl-4 font-normal text-gray-400 ">
              {cards.length}
            </div>
          </div>
        </div>
      );
    }
    return (
      <input
        onChange={handleOnChange}
        onBlur={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => changeTitle(e)}
        type="text"
        value={Title}
        autoFocus
        className="border font-bold border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      />
    );
  };
  return <>{toggle()}</>;
};

export default Title;
