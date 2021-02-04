import React from 'react';
import colors from 'constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableOpacityProps } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { IconNames } from '@ant-design/react-native/lib/icon';
import { Text } from 'components/Text';

interface IconButtonProps extends TouchableOpacityProps {
  iconName: IconNames;
  iconColor?: string;
  textColor?: string;
}

export const IconButton: React.FC<IconButtonProps> = (props) => {
  const { iconName, iconColor, textColor, style, ...otherProps } = props;
  return (
    <TouchableOpacity
      style={[{ flexDirection: 'row', alignItems: 'center' }, style]}
      {...otherProps}
    >
      <Icon name={iconName} color={iconColor} />
      <Text style={{ marginStart: 10, color: textColor ?? colors.primary }}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};
