import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';

interface TextProps extends RNTextProps {
  variant?: 'title' | 'subtitle';
}

export const Text: React.FC<TextProps> = (props) => {
  const { style, ...otherProps } = props;
  const styleForVariant = () => {
    switch (props.variant) {
      case 'title':
        return styles.title;

      case 'subtitle':
        return styles.subtitle;
      default:
        return {};
    }
  };
  return (
    <RNText style={[styleForVariant(), style]} {...otherProps}>
      {props.children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
  },
});
