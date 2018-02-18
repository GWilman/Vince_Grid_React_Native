import { AsyncStorage } from 'react-native';

class Auth {

  static async saveItem(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

  static async getToken() {
    let token = null;
    try {
      await AsyncStorage.getItem('token')
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

  // static removeToken() {
  //   localStorage.removeItem('token');
  // }

  static async removeToken() {
    try {
      await AsyncStorage.removeItem('token');
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  static async getPayload() {
    let payload = null;
    try {
      await AsyncStorage.getItem('token')
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
