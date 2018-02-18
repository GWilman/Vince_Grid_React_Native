import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Authentication from './routes/Authentication';
import Dashboard from './routes/Dashboard';
import CreateLeague from './routes/CreateLeague';

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
              component={Authentication}
              initial={!this.state.hasToken}
              hideNavBar={true}
              key='Authentication'
              title='Authentication'
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
