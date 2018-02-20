import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Home from './routes/Home';
import Login from './routes/Auth/Login';
import Signup from './routes/Auth/Signup';
import Dashboard from './routes/Dashboard';
import CreateLeague from './routes/CreateLeague';
import JoinLeague from './routes/JoinLeague';

import Auth from './lib/Auth';

class App extends Component {

  constructor() {
    super();
    this.state = {
      hasToken: false,
      isLoaded: false
    };
  }

  componentDidMount() {
    Auth.getToken().then((token) => {
      this.setState({ hasToken: token !== null, isLoaded: true });
    });
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <ActivityIndicator />
      );
    } else {
      return(
        <Router>
          <Scene key='root'>
            <Scene
              component={Login}
              initial={!this.state.hasToken}
              hideNavBar={true}
              key='Login'
              title='Login'
            />
            <Scene
              component={Signup}
              initial={!this.state.hasToken}
              hideNavBar={true}
              key='Signup'
              title='Signup'
            />
            <Scene
              component={Home}
              initial={!this.state.hasToken}
              hideNavBar={true}
              key='Home'
              title='Home'
            />
            <Scene
              component={JoinLeague}
              initial={this.state.hasToken}
              hideNavBar={true}
              key='JoinLeague'
              title='Join League'
            />
            <Scene
              component={CreateLeague}
              initial={this.state.hasToken}
              hideNavBar={true}
              key='CreateLeague'
              title='Create League'
            />
            <Scene
              component={Dashboard}
              initial={this.state.hasToken}
              hideNavBar={true}
              key='Dashboard'
              title='Dashboard'
            />
          </Scene>
        </Router>
      );
    }
  }
}

export default App;
