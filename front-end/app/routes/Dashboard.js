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

  async getPayload() {
    let payload = null;
    try {
      await AsyncStorage.getItem('id_token')
        .then(token => {
          payload = JSON.parse(atob(token.split('.')[1]));
        });
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
    // console.log(token);
    return payload;
  }

  // getPayload() {
  //   const token = this.getToken();
  //   if (!token) return null;
  //   console.log('getToken', this.getToken());
  //   console.log('token', token);
  //   console.log(typeof(token));
  //   // NOT A FUNCTION
  //   // return JSON.parse(atob(token.split('.')[1]));
  // }

  componentDidMount() {
    this.getPayload()
      .then(data => {
        this.setState({user: data});
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

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Dashboard</Text>
      </View>
    );
  }

}

export default Dashboard;
