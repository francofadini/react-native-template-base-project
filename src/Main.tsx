import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from 'react-native';
import BottomTabNavigator from './navigators/BottomTabNavigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
    </>
  );
};
export default App;