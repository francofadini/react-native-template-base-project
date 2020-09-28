import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import PostsPresenter, { PostsView } from 'screens/posts/PostsPresenter';
import PostsConfigurator from 'screens/posts/PostsConfigurator';
import { ListView } from '@ant-design/react-native';
import { renderLICPost } from 'components/LICPost';
import { ImageLabelView } from 'components/ImageLabelView';
import { iconLoading } from 'assets';
import strings from 'constants/strings';

interface PostsScreenProps {

}

export const PostsScreen: React.FC<PostsScreenProps> = (props) => {

    // Hooks
    useEffect(() => {componentDidMount()},[])
    useEffect(() => {return () => {componentWillUnmount()}}, []);

    // Component Lifecycle
    const componentDidMount = () => {}
    const componentWillUnmount = () => {}

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
            renderItem={renderLICPost}
            paginationAllLoadedView={()=><></>}
            paginationFetchingView={()=>
              <ImageLabelView
                imageSource={iconLoading}
                label={strings.postsScreen.loadingMessage}/>}/>
    );
}


const styles = StyleSheet.create({
  root : {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})