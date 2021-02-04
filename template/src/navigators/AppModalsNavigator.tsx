import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from 'navigators/BottomTabNavigator';
import ModalAuth0StackNavigator from 'navigators/ModalAuth0StackNavigator';

const Stack = createStackNavigator();

function AppModalsStackNavigator() {
  return (
    <Stack.Navigator mode={'modal'} headerMode={'none'}>
      <Stack.Screen name={'BottomTabs'} component={BottomTabNavigator} />
      <Stack.Screen
        name={'Auth0AuthModal'}
        component={ModalAuth0StackNavigator}
      />
    </Stack.Navigator>
  );
}

export default AppModalsStackNavigator;
