import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconNames } from '@ant-design/react-native/lib/icon';
import { Icon } from '@ant-design/react-native';

export interface LICProps {
  style?: object;
  showRightIcon?: boolean;
  rightIconName?: IconNames;
  leftComponent?: JSX.Element;
  topComponent?: JSX.Element;
  bottomComponent?: JSX.Element;
  topStyle?: object;
  bottomStyle?: object;
  topRightComponent?: JSX.Element;
  bottomRightComponent?: JSX.Element;
  topRightStyle?: object;
  bottomRightStyle?: object;
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'stretch',
  },
  middleContainer: {
    flex: 2,
    backgroundColor: 'transparent',
  },
  leftSideContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  rightSideContainer: {
    backgroundColor: 'transparent',
  },
  componentContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  rightIcon: {
    marginLeft: 5,
    alignSelf: 'center',
  },
});

export const ListItemComplex: React.FC<LICProps> = (props) => {
  const {
    showRightIcon = false,
    rightIconName = 'right',
    ...restProps
  } = props;
  return (
    <TouchableOpacity {...restProps} style={{ padding: 12, ...props.style }}>
      <View style={styles.mainContainer}>
        <View style={styles.leftSideContainer}>{props.leftComponent}</View>

        <View style={styles.middleContainer}>
          <View style={{ ...styles.componentContainer, ...props.topStyle }}>
            {props.topComponent}
          </View>
          <View style={{ ...styles.componentContainer, ...props.bottomStyle }}>
            {props.bottomComponent}
          </View>
        </View>

        <View style={styles.rightSideContainer}>
          <View
            style={{ ...styles.componentContainer, ...props.topRightStyle }}
          >
            {props.topRightComponent}
          </View>
          <View
            style={{ ...styles.componentContainer, ...props.bottomRightStyle }}
          >
            {props.bottomRightComponent}
          </View>
        </View>

        {showRightIcon ? (
          <Icon style={styles.rightIcon} name={rightIconName} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};
