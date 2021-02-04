import colors from 'constants/colors';
import React from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';

export const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <RNTextInput selectionColor={colors.primary} {...props}>
      {props.children}
    </RNTextInput>
  );
};
