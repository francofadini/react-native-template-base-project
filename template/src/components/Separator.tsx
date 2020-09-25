import React from 'react';
import { View as RNView, ViewProps } from 'react-native';
import colors from 'constants/colors';


export const Separator: React.FC<ViewProps> = (props) => {
  return (
    <RNView 
      style={[{backgroundColor: colors.separator, height: 0.5}, props.style]}>
    </RNView>
  )
}