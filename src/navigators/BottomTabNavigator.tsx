import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import ItemsStackNavigator from 'navigators/ItemsStackNavigator';
import AccountStackNavigator from 'navigators/AccountStackNavigator';
import { Icon, IconNames } from 'components/Icon';
import strings from 'constants/strings';

const Tab = createBottomTabNavigator();

const BottomNavigationOptions: (routeName: string) => BottomTabNavigationOptions = (routeName) => ({
  tabBarIcon: ({ focused, color, size }) => {
    return <Icon name={ScreenIcons[routeName]} color={color}/>
  },
  title: ScreenTitles[routeName]
})

const ScreenIcons: { [key: string]: IconNames } = {
  "Items": "tag",
  "Account": "user"
}

const ScreenTitles: { [key: string]: string } = {
  "Items": strings.itemsScreen.title,
  "Account": strings.accountScreen.title
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({route})=> BottomNavigationOptions(route.name)}>
      <Tab.Screen name="Items" component={ItemsStackNavigator} />
      <Tab.Screen name="Account" component={AccountStackNavigator} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;