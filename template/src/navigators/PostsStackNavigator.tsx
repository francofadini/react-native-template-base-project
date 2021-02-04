import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultNavigatorScreenOptions } from 'navigators/DefaultNavigatorScreenOptions';
import strings from 'constants/strings';
import { AllPostsFragment } from 'fragments/all-posts/all-posts.fragment';

const Stack = createStackNavigator();

function PostsStackNavigator() {
  return (
    <Stack.Navigator screenOptions={DefaultNavigatorScreenOptions}>
      <Stack.Screen
        name="Posts"
        options={{
          title: strings.postsScreen.title,
        }}
        component={AllPostsFragment}
      />
    </Stack.Navigator>
  );
}

export default PostsStackNavigator;
