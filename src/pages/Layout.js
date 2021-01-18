import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="flex">
      <div>test</div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
