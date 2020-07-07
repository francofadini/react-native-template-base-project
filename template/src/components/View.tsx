import React from 'react';
import { View as RNView, ViewProps } from 'react-native';
import colors from 'constants/colors';


export const View: React.FC<ViewProps> = (props) => {
  return (
    <RNView 
    {...props}
    style={[{backgroundColor: colors.background},props.style]}>
      {props.children}
    </RNView>
  )
}