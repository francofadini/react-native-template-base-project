import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'components/View';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import strings from 'constants/strings';

interface ExampleScreenProps {

}

const styles = StyleSheet.create({
  root : {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  button: {
    marginTop: 50
  }
})


export const ExampleScreen: React.FC<ExampleScreenProps> = (props) => {
  // Lifecycle Setup
  useEffect(() => {componentDidMount()},[])
  useEffect(() => {return () => {componentWillUnmount()}}, []);
  useEffect(() => {onChildrenUpdate()}, [props.children]);

  // Component Lifecycle
  const componentDidMount = () => {}
  const componentWillUnmount = () => {}
  const onChildrenUpdate = () => {}

  // Component State
  const [count, setCount] = useState(0);

  // Component Methods
  const increaseCount = () => {
    setCount(count + 1)
  }

  // Component Render
  return (
    <View style={styles.root}>
      <Text>{strings.exampleScreen.title}</Text>
      <Text>{strings.exampleScreen.counterLabel} : {count}</Text>
      <Button
      style={styles.button}
      type={'primary'} 
      onPress={increaseCount}>
        {strings.exampleScreen.upButtonLabel} !
      </Button>
    </View>
  );
}