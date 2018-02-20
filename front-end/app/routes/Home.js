import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/styles';

class Home extends Component {

  login() {
    Actions.Login();
  }

  signup() {
    Actions.Signup();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Vince Grid</Text>
        <View style={styles.itemContainer}>
          <TouchableOpacity style={styles.buttonWrapper} onPress={this.login.bind(this)}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonWrapper} onPress={this.signup.bind(this)}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;
