import React from 'react';
import { Button as ANTButton } from '@ant-design/react-native';
import { ButtonProps } from '@ant-design/react-native/lib/button';


export const Button: React.FC<ButtonProps> = (props) => {
  return (<ANTButton {...props}>{props.children}</ANTButton>)
}