import React from 'react';
import { Tag as ANTTag } from '@ant-design/react-native';
import { TagNativeProps } from '@ant-design/react-native/lib/tag';

export const Tag: React.FC<TagNativeProps> = (props) => {
  return (<ANTTag {...props}/>)
}