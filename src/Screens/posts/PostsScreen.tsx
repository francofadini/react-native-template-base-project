import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'components/View';
import { Text } from 'components/Text';
import PostsPresenter, { PostsView } from 'screens/posts/PostsPresenter';
import PostsConfigurator from 'screens/posts/PostsConfigurator';
import { ListView } from '@ant-design/react-native';
import { renderLICPost } from 'components/LICPost';

interface PostsScreenProps {

}

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

    // Component Render
    return (
        <ListView
            onFetch={presenter.onListFetch}
            keyExtractor={(item, index) => "index-" + index}
            renderItem={renderLICPost}/>
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