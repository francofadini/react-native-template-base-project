import React from 'react';
import { Image as RNImage, ImageProps } from 'react-native';

export const Image: React.FC<ImageProps> = (props) => {
  return <RNImage {...props}>{props.children}</RNImage>;
};
