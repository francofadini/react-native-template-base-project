import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from 'navigators/BottomTabNavigator';
import ModalQRScannerStackNavigator from 'navigators/ModalQRScannerStackNavigator';

const Stack = createStackNavigator();

function AppModalsStackNavigator() {
  return (
    <Stack.Navigator mode={'modal'} headerMode={'none'}>
      <Stack.Screen name={'BottomTabs'} component={BottomTabNavigator} />
      <Stack.Screen name={'QRScannerModal'} component={ModalQRScannerStackNavigator} />
    </Stack.Navigator>
  );
}

export default AppModalsStackNavigator;