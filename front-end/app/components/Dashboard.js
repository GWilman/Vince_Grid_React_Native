import React, { Component } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/styles';

import Auth from '../lib/Auth';

class Dashboard extends Component {

  userLogout() {
    Auth.removeToken();
    Alert.alert('Logout Success!');
    Actions.Home();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <TouchableOpacity style={styles.buttonWrapper} onPress={Actions.MyLeagues}>
            <Text style={styles.buttonText}>My Leagues</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWrapper} onPress={Actions.CreateLeague}>
            <Text style={styles.buttonText}>Create League</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWrapper} onPress={Actions.JoinLeague}>
            <Text style={styles.buttonText}>Join League</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWrapper} onPress={this.userLogout}>
            <Text style={styles.buttonText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

export default Dashboard;
