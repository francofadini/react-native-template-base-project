import React from 'react';
import { RefreshControl as RNRefreshControl, RefreshControlProps } from 'react-native';


export const RefreshControl: React.FC<RefreshControlProps> = (props) => {
  return (<RNRefreshControl {...props}>{props.children}</RNRefreshControl>)
}