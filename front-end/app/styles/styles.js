import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  buttonText: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
  },

  buttonWrapper: {
    backgroundColor: '#D3D3D3',
    marginBottom: 10,
    width: 300
  },

  container: {
    paddingTop: 30,
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#3ACF7B'
  },

  itemContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },

  leagueJoinContainer: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '90%',
    padding: 30
  },

  form: {
    width: 300
  },

  image: {
    margin: 10
  },

  inputText: {
    marginBottom: 10,
    padding: 10
  },

  title: {
    fontSize: 40,
    margin: 10,
    textAlign: 'center'
  },

  leagueInfo: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  leagueInfoLeft: {
    flex: 1,
    justifyContent: 'flex-start'
  },

  leagueInfoRight: {
    flex: 1,
    textAlign: 'right',
    justifyContent: 'flex-end'
  }

});

export default styles;
