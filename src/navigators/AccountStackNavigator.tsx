import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ExampleScreen } from 'screens/ExampleScreen';

const Stack = createStackNavigator();

function AccountStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={ExampleScreen} />
    </Stack.Navigator>
  );
}

export default AccountStackNavigator;