import React from 'react';
import { Button as ANTButton } from '@ant-design/react-native';
import { ButtonProps } from '@ant-design/react-native/lib/button';
import { Text } from 'components/Text';

export const Button: React.FC<ButtonProps> = (props) => {
  return <ANTButton {...props}>{props.children}</ANTButton>;
};

interface FlatButton extends ButtonProps {
  color?: string;
}

export const FlatButton: React.FC<FlatButton> = (props) => {
  return (
    <ANTButton
      style={[{ borderWidth: 0, backgroundColor: 'transparent' }, props.style]}
      activeStyle={{ backgroundColor: 'transparent' }}
      {...props}
    >
      <Text style={{ color: props.color }}>{props.children}</Text>
    </ANTButton>
  );
};
