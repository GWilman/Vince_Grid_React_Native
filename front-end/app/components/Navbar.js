import React from 'react';
import { Text } from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';

const Navbar = () => {
  return (
    <BottomNavigation
      labelColor="white"
      rippleColor="white"
      style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
      onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex}`)}
    >
      <Tab
        barBackgroundColor="#37474F"
        label="Home"
        icon={<Text>H</Text>}
      />
      <Tab
        barBackgroundColor="#00796B"
        label="Join"
        icon={<Text>£</Text>}
      />
      <Tab
        barBackgroundColor="#5D4037"
        label="Create"
        icon={<Text>+</Text>}
      />
      <Tab
        barBackgroundColor="#3E2723"
        label="Menu"
        icon={<Text>=</Text>}
      />
    </BottomNavigation>
  );
};

export default Navbar;
