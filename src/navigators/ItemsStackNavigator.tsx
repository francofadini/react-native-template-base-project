import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PostsScreen } from 'screens/posts/PostsScreen';

const Stack = createStackNavigator();

function ItemsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Items" component={PostsScreen} />
    </Stack.Navigator>
  );
}

export default ItemsStackNavigator;