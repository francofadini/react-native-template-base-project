import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ExampleScreen } from 'screens/ExampleScreen';

const Stack = createStackNavigator();

function ItemsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Items" component={ExampleScreen} />
    </Stack.Navigator>
  );
}

export default ItemsStackNavigator;