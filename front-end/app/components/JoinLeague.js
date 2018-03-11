import React, { Component } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import styles from '../styles/styles';

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
      .then(user => {
        fetch(`http://127.0.0.1:3001/users/${user.userId}`, {
          method: 'GET',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
        })
          .then(response => response.json())
          .then(user => {
            this.setState({ user });
          })
          .then(() => fetch('http://127.0.0.1:3001/leagues', {
            method: 'GET',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
          })
            .then(response => response.json())
            .then(leagues => {
              const filtered = leagues.filter(league => {
                if (this.state.user.leagues.find(_league => _league._id === league._id)) {
                  return false;
                } else {
                  return true;
                }
              });
              this.setState({ leagues: filtered });
            }))
          .done();
      })
      .catch(err => console.error(err));

  }

  handleSubmit(league) {
    const code = this.state.leagues.find(_league => _league._id === league._id).code;

    if (code !== this.state.code) {
      return Alert.alert('Invalid code');
    }

    const newLeagues = this.state.user.leagues.slice();
    newLeagues.push(league._id);
    const user = Object.assign({}, this.state.user, { leagues: newLeagues });

    fetch(`http://127.0.0.1:3001/users/${this.state.user._id}`, {
      method: 'PUT',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user
      })
    })
      .then(response => response.json())
      .then(user => {
        this.setState({ user });
        Alert.alert(`Success! You are now a member of ${league.name}!`);
      })
      .done();

  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.itemContainer}>
            { this.state.leagues && this.state.leagues.map(league =>
              <View key={league._id} style={styles.leagueSmallContainer}>
                <View style={styles.leagueInfo}>
                  <Text>{this.state.code}</Text>
                  <Text style={styles.leagueInfoLeft}>{league.name}</Text>
                  <Text style={styles.leagueInfoRight}>Stake: £{league.stake}</Text>
                </View>
                <View style={styles.leagueJoinForm}>
                  <TextInput
                    editable={true}
                    onChangeText={(code) => this.setState({ code: parseInt(code, 10) })}
                    placeholder='Enter code'
                    returnKeyType='next'
                    style={styles.inputText}
                    value={league.entryCode}
                  />
                  <TouchableOpacity style={styles.joinButtonWrapper} onPress={() => this.handleSubmit(league)}>
                    <Text style={styles.buttonText}>Join</Text>
                  </TouchableOpacity>
                </View>
              </View>)
            }
          </View>
        </ScrollView>
      </View>
    );
  }

}

export default JoinLeague;
