import React, { Component } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

// import Auth from '../lib/Auth';

class JoinLeague extends Component {

  constructor() {
    super();
    this.state = {
      leagues: null
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:3001/leagues', {
      method: 'GET',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(leagues => this.setState({ leagues }))
      .done();
  }

  // handleChange = ({ target: { name, value } }) => {
  //   const league = Object.assign({}, this.state.league, { [name]: value });
  //   this.setState({ league });
  // }
  //
  // handleSubmit() {
  //   fetch('http://127.0.0.1:3001/leagues', {
  //     method: 'POST',
  //     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       name: this.state.name,
  //       stake: this.state.stake
  //     })
  //   })
  //     .then(league => console.log(league))
  //     .then(() => {
  //       Alert.alert('League created!');
  //       Actions.Dashboard();
  //     })
  //     .done();
  // }

  render() {
    console.log('leagues', this.state.leagues);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Join a League</Text>
        { this.state.leagues && this.state.leagues.map(league =>
          <View key={league._id}>
            <Text>{league.name}</Text>
          </View>)
        }
      </View>
    );
  }

}

export default JoinLeague;
