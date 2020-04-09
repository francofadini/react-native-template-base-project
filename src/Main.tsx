import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  mainView:{
    flex: 1,
    justifyContent: 'center',

  },
  mainText: {
    textAlign: 'center',
  }
});

export default App;