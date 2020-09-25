import React from 'react';
import { Badge as ANTBadge } from '@ant-design/react-native';
import { BadgeProps } from '@ant-design/react-native/lib/badge';

export const Badge: React.FC<BadgeProps> = (props) => {
  return (<ANTBadge {...props}/>)
}