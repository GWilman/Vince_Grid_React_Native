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
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: 320,
    padding: 20,
    marginBottom: 10,
    borderRadius: 10
  },

  form: {
    width: 300
  },

  leagueJoinForm: {
    width: '100%'
  },

  joinButtonWrapper: {
    backgroundColor: '#D3D3D3',
    width: '100%'
  },

  image: {
    margin: 10
  },

  inputText: {
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10
  },

  title: {
    color: '#fff',
    fontSize: 40,
    margin: 10,
    textAlign: 'center'
  },

  leagueInfo: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10
  },

  leagueInfoLeft: {
    flex: 1,
    justifyContent: 'flex-start',
    fontSize: 20
  },

  leagueInfoRight: {
    flex: 1,
    textAlign: 'right',
    justifyContent: 'flex-end',
    fontSize: 20
  }

});

export default styles;
