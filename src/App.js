import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Project from './pages/Project';
import { withRouter } from 'react-router';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Sandbox from './pages/Sandbox';
import Sidebar from './components/Sidebar';
import PrivateRoute from './components/PrivateRoute';
import ModalManager from './components/ModalManager';
import { useSelector } from 'react-redux';
import LoadingComponent from './components/LoadingComponent';

const exclusionArray = ['/signin', '/signup', '/sandbox'];

const App = ({ location }) => {
  const [title, setTitle] = useState();
  const [isOpen, setIsOpen] = useState(true);
  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const { initialized } = useSelector((state) => state.async);
  if (!initialized) return <LoadingComponent content="Loading app..." />;
  return (
    <>
      <ModalManager />
      <div className="flex">
        {exclusionArray.indexOf(location.pathname) < 0 && (
          <Sidebar isOpen={isOpen} />
        )}
        <main className="flex-grow flex flex-col min-h-screen overflow-x-scroll">
          {exclusionArray.indexOf(location.pathname) < 0 && (
            <Navbar handleSidebar={handleSidebar} />
          )}
          {/* {location.pathname !== '/signin' && <Navbar />} */}
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/project" component={Project} />
          <PrivateRoute path="/sandbox/:title" component={Sandbox} />
          {/* <div className={`${isOpen ? '' : 'text-red-600'}`}>test</div> */}
        </main>
      </div>
    </>
  );
};

export default withRouter(App);
