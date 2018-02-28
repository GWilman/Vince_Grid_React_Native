import React, { Component } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/styles';

import Auth from '../lib/Auth';

class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      leagues: null,
      user: {}
    };
  }

  componentDidMount() {
    Auth.getPayload()
      .then(data => {
        this.setState({ user: data });
      });

  //   const promises = {
  //     leagues: Axios.get('/api/leagues').then(res => res.data),
  //     user: Axios.get(`/api/users/${userId}`).then(res => res.data)
  //   };
  //
  //   Promise.props(promises)
  //     .then(data => this.setState(data))
  //     .catch(err => console.error(err));
  }

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
