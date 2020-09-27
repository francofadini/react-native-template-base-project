import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ExampleScreen } from 'screens/ExampleScreen';
import { DefaultNavigatorScreenOptions } from 'navigators/DefaultNavigatorScreenOptions';
import strings from 'constants/strings';

const Stack = createStackNavigator();

function AccountStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={DefaultNavigatorScreenOptions}>
      <Stack.Screen 
        name="Account"
        options={{
          title: strings.accountScreen.title
        }}
        component={ExampleScreen} />
    </Stack.Navigator>
  );
}

export default AccountStackNavigator;