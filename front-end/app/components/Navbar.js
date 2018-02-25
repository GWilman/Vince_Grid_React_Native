import React from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';

const Navbar = () => {
  return (
    <BottomNavigation
      labelColor="white"
      rippleColor="white"
      style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
      onTabChange={(newTabIndex) => {
        switch (newTabIndex) {
          case 0:
            Actions.Dashboard();
            break;
          case 1:
            Actions.JoinLeague();
            break;
          case 2:
            Actions.CreateLeague();
            break;
          case 3:
            Actions.Dashboard();
            break;
        }
      }}
    >
      <Tab
        barBackgroundColor="#37474F"
        label="Home"
        icon={<Text style={{textAlign: 'center'}}>H</Text>}
      />
      <Tab
        barBackgroundColor="#00796B"
        label="Join"
        icon={<Text style={{textAlign: 'center'}}>£</Text>}
      />
      <Tab
        barBackgroundColor="#5D4037"
        label="Create"
        icon={<Text style={{textAlign: 'center'}}>+</Text>}
      />
      <Tab
        barBackgroundColor="#3E2723"
        label="Menu"
        icon={<Text style={{textAlign: 'center'}}>=</Text>}
      />
    </BottomNavigation>
  );
};

export default Navbar;
