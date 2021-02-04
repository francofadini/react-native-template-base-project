import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import UIProvider from 'components/UIProvider';
import RNTheme from 'constants/theme.rn';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';
import AppModalsStackNavigator from 'navigators/AppModalsNavigator';
import SessionProvider from 'tools/session/session-provider.component';

const App = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
  }, []);

  return (
    <SessionProvider>
      <UIProvider>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer theme={RNTheme}>
          <AppModalsStackNavigator />
        </NavigationContainer>
      </UIProvider>
    </SessionProvider>
  );
};

export default App;
