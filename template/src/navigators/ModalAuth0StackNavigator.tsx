import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultNavigatorScreenOptions } from 'navigators/DefaultNavigatorScreenOptions';
import { Auth0Login } from 'components/Auth0Login';
import { Auth0Register } from 'components/Auth0Register';

const Stack = createStackNavigator();

function ModalAuth0StackNavigator() {
  return (
    <Stack.Navigator screenOptions={DefaultNavigatorScreenOptions}>
      <Stack.Screen name="Auth0Login" component={Auth0Login} />
      <Stack.Screen name="Auth0Register" component={Auth0Register} />
    </Stack.Navigator>
  );
}

export default ModalAuth0StackNavigator;
