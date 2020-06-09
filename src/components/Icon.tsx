import React from 'react';
import { Icon as ANTIcon } from '@ant-design/react-native';
import { IconProps } from '@ant-design/react-native/lib/icon';
import { IconNames as ANTIconNames } from '@ant-design/react-native/lib/icon';

export type IconNames = ANTIconNames

export const Icon: React.FC<IconProps> = (props) => {
  return (<ANTIcon {...props}/>)
}