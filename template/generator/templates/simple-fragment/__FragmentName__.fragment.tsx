import React from 'react';
import { __FragmentName__FragmentProps } from 'fragments/__FragmentName__(kebabCase)/interfaces';
import { use__FragmentName__Controller } from 'fragments/__FragmentName__(kebabCase)/__FragmentName__(kebabCase).controller';
import styles from 'fragments/__FragmentName__(kebabCase)/__FragmentName__(kebabCase).styles';
import { View } from 'components/View';

export const __FragmentName__Fragment: React.FC<__FragmentName__FragmentProps> = (
  props,
) => {
  const { useController = use__FragmentName__Controller } = props;
  const controller = useController();

  // Render
  return <View style={styles.root}>__FragmentName__</View>;
};
