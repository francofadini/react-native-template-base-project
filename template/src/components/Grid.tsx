import React from 'react';
import { Grid as ANTGrid } from '@ant-design/react-native';
import { GridProps } from '@ant-design/react-native/lib/grid';


export const Grid: React.FC<GridProps> = (props) => {
  return (<ANTGrid {...props}>{props.children}</ANTGrid>)
}