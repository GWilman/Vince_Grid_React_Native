import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './Home';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Dashboard from './Dashboard';
import CreateLeague from './CreateLeague';
import JoinLeague from './JoinLeague';

const Routes = ({ hasToken }) => {

  return (
    <Router>
      <Scene key='root'>
        <Scene
          component={Login}
          initial={!hasToken}
          hideNavBar={true}
          key='Login'
          title='Login'
        />
        <Scene
          component={Signup}
          initial={!hasToken}
          hideNavBar={true}
          key='Signup'
          title='Signup'
        />
        <Scene
          component={Home}
          initial={!hasToken}
          hideNavBar={true}
          key='Home'
          title='Home'
        />
        <Scene
          component={JoinLeague}
          initial={hasToken}
          hideNavBar={true}
          key='JoinLeague'
          title='Join League'
        />
        <Scene
          component={CreateLeague}
          initial={hasToken}
          hideNavBar={true}
          key='CreateLeague'
          title='Create League'
        />
        <Scene
          component={Dashboard}
          initial={hasToken}
          hideNavBar={true}
          key='Dashboard'
          title='Dashboard'
        />
      </Scene>
    </Router>
  );

}

export default Routes;
