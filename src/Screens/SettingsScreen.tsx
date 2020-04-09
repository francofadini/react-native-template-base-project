import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

function Screen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Screen} />
    </Stack.Navigator>
  );
}

export default SettingsStack;