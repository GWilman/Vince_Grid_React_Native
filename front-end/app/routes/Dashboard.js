import React, { Component } from 'react';
import { Alert, AsyncStorage, Text, TouchableOpacity, View } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import styles from './styles';

// import Auth from '../../lib/Auth'

class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      leagues: null,
      user: {}
    };
  }

  async getToken() {
    let token;
    try {
      await AsyncStorage.getItem('id_token')
        .then(value => {
          // console.log(value);
          token = value;
        });
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
    console.log(token);
    return token;
  }

  getPayload() {
    const token = this.getToken();
    if (!token) return null;
    console.log('token', token);
    // NOT A FUNCTION
    // return JSON.parse(atob(token.split('.')[1]));
  }

  componentDidMount() {
    const user = this.getPayload();
    console.log('user', user);
  //   const promises = {
  //     leagues: Axios.get('/api/leagues').then(res => res.data),
  //     user: Axios.get(`/api/users/${userId}`).then(res => res.data)
  //   };
  //
  //   Promise.props(promises)
  //     .then(data => this.setState(data))
  //     .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Dashboard</Text>
      </View>
    );
  }

}

export default Dashboard;
