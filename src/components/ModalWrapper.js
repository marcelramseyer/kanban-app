import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../store/reducers/modalReducer';

export default function ModalWrapper({ children, size, header }) {
  const dispatch = useDispatch();
  return (
    <div size={size ? size : null}>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative" style={{ width: '400px' }}>
          <div className="border-0 rounded relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* {header && <div className="w-96">{header}</div>} */}
            <div className="flex items-start justify-between bg-gray-100 p-4 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-xl">Projekt hinzufügen</h3>
              <button onClick={() => dispatch(closeModal())}>X</button>
            </div>
            <div>{children}</div>
            <div className="h-96"></div>
          </div>
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
}
