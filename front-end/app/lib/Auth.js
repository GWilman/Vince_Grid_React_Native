import { AsyncStorage } from 'react-native';

class Auth {

  // static setToken(token) {
  //   return localStorage.setItem('token', token);
  // }

  static async getToken() {
    let token = null;
    try {
      await AsyncStorage.getItem('id_token')
        .then(value => {
          token = value;
        });
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
    return token;
  }

  // static isAuthenticated() {
  //   return !!this.getToken();
  // }
  //
  // static removeToken() {
  //   localStorage.removeItem('token');
  // }

  static async getPayload() {
    let payload = null;
    try {
      await AsyncStorage.getItem('id_token')
        .then(token => {
          payload = JSON.parse(atob(token.split('.')[1]));
        });
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
    return payload;
  }

}

export default Auth;
