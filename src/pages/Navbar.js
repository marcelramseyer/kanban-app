import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiPlusCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';

function Navbar() {
  const state = useSelector((state) => state.auth);
  return (
    <div>
      <header className="flex items-center justify-between bg-white w-full py-2 px-6">
        <div className=" flex items-center">
          <FiMenu className="text-2xl mr-4 stroke-1" />
          <div className="font-semibold text-xl">Taskmanager</div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="text-sm w-8 h-8 flex bg-green-500 justify-center items-center m-1 mr-2 rounded-full text-white">
              MR
            </div>
            <FiPlusCircle className="text-3xl stroke-1" />
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/project">Projekt</NavLink>
            {state.currentUser && state.currentUser.email}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
