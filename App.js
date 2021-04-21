import React from 'react';
import {StatusBar} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
      <DestinationSearch />
    </>
  );
};

export default App;
