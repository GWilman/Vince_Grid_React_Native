import React, { Component } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../../styles/styles';
import Auth from '../../lib/Auth';

class Authentication extends Component {

  constructor() {
    super();
    this.state = {
      username: null,
      password: null
    };
  }

  userSignup() {
    if (!this.state.username || !this.state.password) return;

    fetch('http://127.0.0.1:3001/users', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then((response) => {
        if (response.status >= 400) return response.status;
        return response.json();
      })
      .then((responseData) => {
        if (responseData >= 400) return Alert.alert('That username is already taken. Please choose another.');
        Auth.saveItem('token', responseData.token),
        Alert.alert( 'Signup Success!'),
        Actions.Dashboard();
      })
      .done();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
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

            <TouchableOpacity style={styles.buttonWrapper} onPress={this.userSignup.bind(this)}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Authentication;
