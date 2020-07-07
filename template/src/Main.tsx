import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from 'react-native';
import BottomTabNavigator from 'navigators/BottomTabNavigator';
import UIProvider from 'components/UIProvider';
import RNTheme from 'constants/theme.rn';

const App = () => {
  return (
    <UIProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer theme={RNTheme}>
        <BottomTabNavigator/>
      </NavigationContainer>
    </UIProvider>
  );
};

export default App;