import React from 'react';
import { AllPostsFragmentProps } from 'fragments/all-posts/interfaces';
import { useAllPostsController } from 'fragments/all-posts/all-posts.controller';
import styles from 'fragments/all-posts/all-posts.styles';
import { renderLICPost } from 'components/LICPost';
import { ImageLabelView } from 'components/ImageLabelView';
import { iconLoading } from 'assets';
import strings from 'constants/strings';
import { ListView } from '@ant-design/react-native';
import { View } from 'components/View';

export const AllPostsFragment: React.FC<AllPostsFragmentProps> = (props) => {
  const { useController = useAllPostsController } = props;
  const controller = useController();

  // Render
  return (
    <View style={styles.root}>
      <ListView
        onFetch={controller.onListFetch}
        keyExtractor={(item, index) => 'index-' + index}
        renderItem={renderLICPost}
        paginationAllLoadedView={() => <></>}
        paginationFetchingView={() => (
          <ImageLabelView
            imageSource={iconLoading}
            label={strings.postsScreen.loadingMessage}
          />
        )}
      />
    </View>
  );
};
