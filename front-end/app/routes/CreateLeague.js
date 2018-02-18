import React, { Component } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

import Auth from '../lib/Auth';

class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      league: {
        name: '',
        stake: '',
        code: null
      }
    };
  }

  componentDidMount() {
    Auth.getToken()
      .then(token => {
        console.log('token', token);
      });
  }

  handleChange = ({ target: { name, value } }) => {
    const league = Object.assign({}, this.state.league, { [name]: value });
    this.setState({ league });
  }

  createLeague() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Create New League</Text>
        <View style={styles.form}>
          <TextInput
            editable={true}
            onChangeText={(username) => this.setState({username})}
            placeholder='Username'
            returnKeyType='next'
            style={styles.inputText}
            value={this.state.username}
          />

          <TextInput
            editable={true}
            onChangeText={(password) => this.setState({password})}
            placeholder='Password'
            returnKeyType='next'
            secureTextEntry={true}
            style={styles.inputText}
            value={this.state.password}
          />

          <TouchableOpacity style={styles.buttonWrapper} onPress={this.createLeague.bind(this)}>
            <Text style={styles.buttonText}>Create League</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

export default Dashboard;
