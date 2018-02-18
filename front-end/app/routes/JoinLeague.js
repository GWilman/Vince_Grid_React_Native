import React, { Component } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import styles from './styles';

import Auth from '../lib/Auth';

class JoinLeague extends Component {

  constructor() {
    super();
    this.state = {
      leagues: null,
      code: null,
      user: null
    };
  }

  componentDidMount() {
    Auth.getPayload()
      .then(({ userId }) => this.setState({ userId }))
      .catch(err => console.error(err));

    // USE USERID TO MAKE REQUEST FOR USER DATA
    // look at multiple fetch requests

    fetch('http://127.0.0.1:3001/leagues', {
      method: 'GET',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(leagues => this.setState({ leagues }))
      .done();
  }

  handleSubmit(league) {
    const code = this.state.leagues.find(_league => _league.id === league.id).code;

    if (code !== this.state.code) {
      return Alert.alert('Invalid code');
    }

    Alert.alert(`Success! You are now a member of ${league.name}!`);

    // FOR BELOW: UPDATE USER OBJECT ON STATE (CONCAT LEAGUE ID)
    // MAKE PUT REQUEST TO SERVER (NEW ROUTES REQUIRED)

    // fetch(`/api/users/${this.state.userId}`, {
    //   method: 'PUT',
    //   headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     leagues: league.id
    //   })
    // })
    //   .then(league => console.log(league))
    //   .then(() => {
    //     Alert.alert('League created!');
    //     Actions.Dashboard();
    //   })
    //   .done();

  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.code && <Text>{this.state.code}</Text>}
        <Text style={styles.title}>Join a League</Text>
        { this.state.leagues && this.state.leagues.map(league =>
          <View key={league._id} style={styles.leagueJoinContainer}>
            <Text>{league.name}</Text>
            <Text>{league.stake}</Text>
            <View style={styles.form}>
              <TextInput
                editable={true}
                onChangeText={(code) => this.setState({ code: parseInt(code, 10) })}
                placeholder='Enter code'
                returnKeyType='next'
                style={styles.inputText}
                value={league.entryCode}
              />
              <TouchableOpacity style={styles.buttonWrapper} onPress={() => this.handleSubmit(league)}>
                <Text style={styles.buttonText}>Join</Text>
              </TouchableOpacity>
            </View>
          </View>)
        }
      </View>
    );
  }

}

export default JoinLeague;
