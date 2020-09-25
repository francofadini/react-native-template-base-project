import React from 'react';
import { List as ANTList } from '@ant-design/react-native';
import { ListProps } from '@ant-design/react-native/lib/list';
import ANTItem, { ListItemProps, Brief as ANTBrief } from '@ant-design/react-native/lib/list/ListItem';

export const List: React.FC<ListProps> = (props) => {
  return (<ANTList {...props}>{props.children}</ANTList>)
}

export const ListItem: React.FC<ListItemProps> = (props) => {
  return (<ANTItem {...props}>{props.children}</ANTItem>)
}

export class Brief extends ANTBrief {}