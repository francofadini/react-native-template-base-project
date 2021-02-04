import 'react-native-gesture-handler';
import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import PostsStackNavigator from 'navigators/PostsStackNavigator';
import strings from 'constants/strings';
import ProfileStackNavigator from 'navigators/ProfileStackNavigator';
import { Icon } from '@ant-design/react-native';
import { IconNames } from '@ant-design/react-native/lib/icon';

const Tab = createBottomTabNavigator();

const BottomNavigationOptions: (
  routeName: string,
) => BottomTabNavigationOptions = (routeName) => ({
  tabBarIcon: ({ color }) => {
    return <Icon name={ScreenIcons[routeName]} color={color} />;
  },
  title: ScreenTitles[routeName],
});

const ScreenIcons: { [key: string]: IconNames } = {
  PostsStack: 'tag',
  AccountStack: 'user',
};

const ScreenTitles: { [key: string]: string } = {
  PostsStack: strings.postsScreen.title,
  AccountStack: strings.accountScreen.title,
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => BottomNavigationOptions(route.name)}
    >
      <Tab.Screen name="PostsStack" component={PostsStackNavigator} />
      <Tab.Screen name="AccountStack" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
