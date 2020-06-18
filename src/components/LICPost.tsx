import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { LICProps, ListItemComplex } from 'components/ListItemComplex';
import { Text } from 'components/Text';
import { View } from 'components/View';

export const renderLICPost = (item: LICPostProps) => {
  return (
    <LICPost
      {...item}/>
  )
}

export interface LICPostProps extends LICProps {
  key: string,
  title: string,
  imageURL: string,
  onPress: (id: string)=>void,
}

export const LICPost: React.FC<LICPostProps> = (props) => {
  
  const contentComponent = (
    <View
      style={props.imageURL ? styles.contentWithImage : null}>
       <Text
        style={{fontWeight:'bold'}}
        numberOfLines={3}>
        {props.title}
      </Text>
    </View>
  )


  const imageComponent = (
    <Image
      style={styles.imageStyle}
      source={{uri: props.imageURL}}/>
  )

  return(
    <ListItemComplex
      {...props}
      style={styles.container}
      leftComponent={props.imageURL ? imageComponent: undefined}
      topComponent={contentComponent}
      showRightIcon={true}/>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 8
  },
  contentWithImage: {
    marginLeft: 10,
  },
  imageStyle: {
    height: 80, 
    width: 80, 
    borderRadius: 8 
  },
  topRight: {
    flex:1,
    justifyContent: 'center',
  },
  bottomRight: {
    flex: 0
  }
});