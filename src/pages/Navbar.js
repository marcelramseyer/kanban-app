import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiMenu, FiPlusCircle, FiPlay, FiEdit2 } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { signOutFirebase } from '../firestore/firebaseService';

function Navbar({ handleSidebar }) {
  const history = useHistory();
  const state = useSelector((state) => state.auth);
  const handleSignOut = async () => {
    await signOutFirebase();
    history.push('/signin');
  };
  return (
    <div>
      <header className="border-b flex items-center justify-between text-gray-900 w-full py-2 px-6">
        <div className=" flex items-center">
          <FiMenu className="text-2xl mr-4 stroke-2" onClick={handleSidebar} />
          <div className=" text-xl font-medium flex items-center">
            Dashboard
            <FiEdit2 className="ml-3 h-4 w-4 text-gray-400 hover:bg-gray-200" />
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="flex items-center rounded-md white py-1 px-3 mr-3">
              25:00 <FiPlay className="ml-4" />
            </div>
            <div className="text-sm w-8 h-8 flex bg-pink-500 justify-center items-center m-1 mr-2 rounded-full text-white">
              MR
            </div>
            <FiPlusCircle className="text-4xl stroke-1 w-8 h-8 ml-2" />

            {state.currentUser && (
              <button onClick={handleSignOut} className="ml-3">
                Log Out
              </button>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
