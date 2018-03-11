import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import styles from '../styles/styles';

import Auth from '../lib/Auth';

class MyLeagues extends Component {

  constructor() {
    super();
    this.state = {
      leagues: null,
      userId: null
    };
  }

  componentDidMount() {
    Auth.getPayload()
      .then(({ userId }) => this.setState({ userId }))
      .catch(err => console.error(err));

    fetch('http://127.0.0.1:3001/leagues', {
      method: 'GET',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(leagues => {
        const filtered = leagues.filter(league => {
          let match = false;
          league.users.forEach(user => {
            if (user._id === this.state.userId) match = true;
          });
          return match;
        });
        this.setState({ leagues: filtered });
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
                  <Text style={styles.leagueInfoLeft}>{league.name}</Text>
                  <Text style={styles.leagueInfoRight}>Stake: £{league.stake}</Text>
                </View>
              </View>)
            }
          </View>
        </ScrollView>
      </View>
    );
  }

}

export default MyLeagues;
