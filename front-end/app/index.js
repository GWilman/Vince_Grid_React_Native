import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Authentication from './routes/Authentication';
import Homepage from './routes/Homepage';

class App extends Component {

  constructor() {
    super();
    this.state = { hasToken: false, isLoaded: false };
  }

  componentDidMount() {
    AsyncStorage.getItem('id_token').then((token) => {
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
              component={Homepage}
              initial={this.state.hasToken}
              hideNavBar={true}
              key='HomePage'
              title='Home Page'
            />
          </Scene>
        </Router>
      );
    }
  }
}

export default App;
