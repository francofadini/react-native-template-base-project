import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'components/View';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import strings from 'constants/strings';
import PostsPresenter, { PostsView } from 'screens/posts/PostsPresenter';
import PostsConfigurator from 'screens/posts/PostsConfigurator';
import { ListView } from '@ant-design/react-native';

interface PostsScreenProps {

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

export const PostsScreen: React.FC<PostsScreenProps> = (props) => {

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
    const view: PostsView  =  {
        
    }

    // Architecture tools
    const presenter: PostsPresenter = PostsConfigurator.buildPresenter(view);
    
    const renderItem = (item: any) => {
        return (
          <View style={{ padding: 10 }}>
            <Text>{item.name}</Text>
          </View>
        );
    };

    // Component Render
    return (
        <ListView
            onFetch={presenter.onListFetch}
            keyExtractor={(item, index) => "index-" + index}
            renderItem={renderItem}/>
    );
}