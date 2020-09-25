import React from 'react';
import { ScrollView as RNScrollView, ScrollViewProps } from 'react-native';


export const ScrollView: React.FC<ScrollViewProps> = (props) => {
  return (<RNScrollView {...props}>{props.children}</RNScrollView>)
}