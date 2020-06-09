import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'components/View';
import { Text } from 'components/Text';
import { Button } from 'components/Button';

interface HomeScreenProps {

}

const styles = StyleSheet.create({
  mainView : {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})


const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  // Lifecycle Setup
  useEffect(() => {componentDidMount()},[])
  useEffect(() => {return () => {componentWillUnmount()}}, []);
  useEffect(() => {onChildrenUpdate()}, [props.children]);

  // Component Lifecycle
  const componentDidMount = () => {}
  const componentWillUnmount = () => {}
  const onChildrenUpdate = () => {}

  // Component State
  const [timer, setTimer] = useState(0);

  // Component Methods
  const increaseTimer = () => {
    setTimer(timer + 1)
  }

  // Component Render
  return (
    <View style={styles.mainView}>
      <Text>Home!</Text>
      <Text>Timer: {timer}</Text>
      <Button 
        type={'primary'} 
        onPress={increaseTimer}
        size={'small'}>
        UP!
      </Button>
    </View>
  );
}

export default HomeScreen;