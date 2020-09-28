import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import __ModelPrural__Presenter, { __ModelPrural__View } from 'screens/__ModelPrural__(camelCase)/__ModelPrural__Presenter';
import __ModelPrural__Configurator from 'screens/__ModelPrural__(camelCase)/__ModelPrural__Configurator';
import { ListView } from '@ant-design/react-native';
import { renderLIC__ModelSingular__ } from 'components/LIC__ModelSingular__';

interface __ModelPrural__ScreenProps {

}

export const __ModelPrural__Screen: React.FC<__ModelPrural__ScreenProps> = (props) => {

    // Hooks
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
    const view: __ModelPrural__View  =  {
        
    }

    // Architecture tools
    const presenter: __ModelPrural__Presenter = __ModelPrural__Configurator.buildPresenter(view);

    // Component Render
    return (
        <ListView
            onFetch={presenter.onListFetch}
            keyExtractor={(item, index) => "index-" + index}
            renderItem={renderLIC__ModelSingular__}/>
    );
}


const styles = StyleSheet.create({
  root : {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})