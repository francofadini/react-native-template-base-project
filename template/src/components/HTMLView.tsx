import React from 'react';
import HTMLViewComponent, { HTMLViewProps } from 'react-native-htmlview';

export const HTMLView: React.FC<HTMLViewProps> = (props) => {
  return <HTMLViewComponent {...props}>{props.children}</HTMLViewComponent>;
};
