import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from 'react-native';
import BottomTabNavigator from 'navigators/BottomTabNavigator';
import UIProvider from 'components/UIProvider';
import RNTheme from 'constants/theme.rn';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';


const App = () => {
  useEffect(() => { 
    setTimeout(() => SplashScreen.hide(), 1000);
  }, [])

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