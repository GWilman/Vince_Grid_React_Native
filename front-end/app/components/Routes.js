import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './Home';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Dashboard from './Dashboard';
import CreateLeague from './CreateLeague';
import JoinLeague from './JoinLeague';
import MyLeagues from './MyLeagues';

const Routes = ({ hasToken }) => {

  return (
    <Router>
      <Scene key='root'>
        <Scene
          component={Login}
          initial={!hasToken}
          hideNavBar={false}
          key='Login'
          title='Login'
        />
        <Scene
          component={Signup}
          initial={!hasToken}
          hideNavBar={false}
          key='Signup'
          title='Signup'
        />
        <Scene
          component={Home}
          initial={!hasToken}
          hideNavBar={false}
          key='Home'
          title='Home'
        />
        <Scene
          component={JoinLeague}
          initial={hasToken}
          hideNavBar={false}
          key='JoinLeague'
          title='Join League'
        />
        <Scene
          component={CreateLeague}
          initial={hasToken}
          hideNavBar={false}
          key='CreateLeague'
          title='Create League'
        />
        <Scene
          component={MyLeagues}
          initial={hasToken}
          hideNavBar={false}
          key='MyLeagues'
          title='My Leagues'
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

};

export default Routes;
