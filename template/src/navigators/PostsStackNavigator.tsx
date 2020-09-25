import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PostsScreen } from 'screens/posts/PostsScreen';
import { DefaultNavigatorScreenOptions } from 'navigators/DefaultNavigatorScreenOptions';
import strings from 'constants/strings';

const Stack = createStackNavigator();

function PostsStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={DefaultNavigatorScreenOptions}>
      <Stack.Screen 
        name="Posts"
        options={{
          title: strings.postsScreen.title
        }}
        component={PostsScreen} />
    </Stack.Navigator>
  );
}

export default PostsStackNavigator;