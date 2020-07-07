import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PostsScreen } from 'screens/posts/PostsScreen';

const Stack = createStackNavigator();

function PostsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Posts" component={PostsScreen} />
    </Stack.Navigator>
  );
}

export default PostsStackNavigator;