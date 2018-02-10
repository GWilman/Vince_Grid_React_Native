import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Authentication from './routes/Authentication';
import Homepage from './routes/Homepage';

class App extends Component {
  render() {
    return(
      <Router>
        <Scene key='root'>
          <Scene
            component={Authentication}
            hideNavBar={true}
            initial={true}
            key='Authentication'
            title='Authentication'
          />
          <Scene
            component={Homepage}
            hideNavBar={true}
            key='HomePage'
            title='Home Page'
          />
        </Scene>
      </Router>
    );
  }
}

export default App;
