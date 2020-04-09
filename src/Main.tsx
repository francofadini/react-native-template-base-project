import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <View style={styles.mainView}>
      <Text style={styles.mainText}> RN Base Project</Text>
    </View>
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
