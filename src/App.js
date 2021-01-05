import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Project from './pages/Project';
import { withRouter } from 'react-router';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const exclusionArray = ['/signin', '/signup'];

const App = ({ location }) => {
  return (
    <div>
      {exclusionArray.indexOf(location.pathname) < 0 && <Navbar />}
      {/* {location.pathname !== '/signin' && <Navbar />} */}
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/" component={Home} />
      <Route path="/project" component={Project} />
    </div>
  );
};

export default withRouter(App);
