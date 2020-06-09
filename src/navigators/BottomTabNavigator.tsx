import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from 'navigators/HomeStackNavigator';
import SettingsStackNavigator from 'navigators/SettingsStackNavigator';
import { Icon, IconNames } from 'components/Icon';

const Tab = createBottomTabNavigator();

const BottomNavigationOptions: (routeName: string) => BottomTabNavigationOptions = (routeName) => ({
  tabBarIcon: ({ focused, color, size }) => {
    return <Icon name={ScreenIcons[routeName]} color={color}/>
  },
  title: ScreenTitles[routeName]
})

const ScreenIcons: { [key: string]: IconNames } = {
  "Home": "home",
  "Settings": "setting"
}

const ScreenTitles: { [key: string]: string } = {
  "Home": "Home",
  "Settings": "Configuraciones"
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({route})=> BottomNavigationOptions(route.name)}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Settings" component={SettingsStackNavigator} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;