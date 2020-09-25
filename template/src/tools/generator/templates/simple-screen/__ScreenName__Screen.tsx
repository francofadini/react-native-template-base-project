import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import __ScreenName__Presenter, { __ScreenName__View } from 'screens/__ScreenName__(camelCase)/__ScreenName__Presenter';
import __ScreenName__Configurator from 'screens/__ScreenName__(camelCase)/__ScreenName__Configurator';
import { View } from 'components/View';
import { Text } from 'components/Text';
import { Button } from 'components/Button';

interface __ScreenName__ScreenProps {

}

export const __ScreenName__Screen: React.FC<__ScreenName__ScreenProps> = (props) => {

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

    // View Interface
    const view: __ScreenName__View  =  {
      increaseCounter() {
        setCount(count + 1)
      }
    }

    // Architecture tools
    const presenter: __ScreenName__Presenter = __ScreenName__Configurator.buildPresenter(view);

    // Component Render
    return (
      <View style={styles.root}>
        <Text>Titulo</Text>
        <Text>Contador: {count}</Text>
        <Button
          style={styles.button}
          type={'primary'} 
          onPress={presenter.onUpButtonPressed}>
          Incrementar !
        </Button>
      </View>
    );
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