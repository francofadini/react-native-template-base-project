import React from 'react';
import { View } from 'components/View';
import { Image } from 'components/Image';
import { Text } from 'components/Text';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import colors from 'constants/colors';

export interface ImageLabelViewProps {
  imageSource: ImageSourcePropType;
  label: string;
}

export const ImageLabelView: React.FC<ImageLabelViewProps> = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.imageSource} />
      <Text style={styles.label}>{props.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
  },
  image: {
    height: 50,
    margin: 30,
    resizeMode: 'contain',
  },
  label: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.primary,
    fontWeight: 'bold',
  },
});
