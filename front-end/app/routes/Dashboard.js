import React, { Component } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

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
        console.log('user', this.state.user);
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

  createLeague() {
    Actions.CreateLeague();
  }

  userLogout() {
    Auth.removeToken();
    Alert.alert('Logout Success!');
    Actions.Authentication();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Dashboard</Text>
        <TouchableOpacity style={styles.buttonWrapper} onPress={this.createLeague.bind(this)}>
          <Text style={styles.buttonText}>Create League</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper} onPress={this.userLogout}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

export default Dashboard;
