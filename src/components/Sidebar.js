import React from 'react';
import { HiOutlineCheckCircle, HiOutlineViewGrid } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

function Sidebar({ isOpen }) {
  return (
    <aside
      className={`z-20 bg-gray-900 w-64 ml-0 min-h-screen flex flex-shrink-0 flex-col ${
        isOpen ? '' : '-ml-64'
      } transition-all duration-300`}
    >
      {/* <NavLink exact to="/" className="ml-3">
          Home <FiHome />
        </NavLink>
        <NavLink to="/project" className="ml-3">
          Projekt
        </NavLink> */}
      <ul className="mt-20">
        <li className="my-px">
          <NavLink
            to="/"
            className="flex flex-row items-center h-8 px-4 text-gray-300 hover:bg-gray-200"
          >
            <span className="flex items-center justify-center text-lg text-gray-400">
              {/* <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg> */}
              <HiOutlineViewGrid className="h-5 w-5 stroke-2" />
            </span>
            <span className="ml-3">Dashboard</span>
          </NavLink>
        </li>
        <li className="my-px">
          <NavLink
            to="/project"
            className="flex flex-row items-center h-8 px-4 text-gray-300 hover:bg-gray-200"
          >
            <span className="flex items-center justify-center text-lg text-gray-400">
              {/* <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg> */}
              <HiOutlineCheckCircle className="h-5 w-5 stroke-2" />
            </span>
            <span className="ml-3">Meine Aufgaben</span>
          </NavLink>
          <NavLink
            to={`/sandbox/Sandbox`}
            className="flex flex-row items-center h-8 px-4 text-gray-300 hover:bg-gray-200"
          >
            <span className="flex items-center justify-center text-lg text-gray-400">
              {/* <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg> */}
              <HiOutlineCheckCircle className="h-5 w-5 stroke-2" />
            </span>
            <span className="ml-3">Sandbox</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
