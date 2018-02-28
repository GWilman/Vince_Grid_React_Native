import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';

import Routes from './components/Routes';
import Navbar from './components/Navbar';
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
    Auth.getToken()
      .then((token) => {
        this.setState({ hasToken: token !== null, isLoaded: true });
      });
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <ActivityIndicator />
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Routes props={this.state} />
          {!this.state.hasToken && <Navbar />}
        </View>
      );
    }
  }
}

export default App;
