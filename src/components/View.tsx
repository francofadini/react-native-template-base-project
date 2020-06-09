import React from 'react';
import { View as RNView, ViewProps } from 'react-native';


export const View: React.FC<ViewProps> = (props) => {
  return (<RNView {...props}>{props.children}</RNView>)
}