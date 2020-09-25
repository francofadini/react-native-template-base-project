import React, { useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { IconButton } from 'components/IconButton';
import { QRScannerListenerParams } from 'navigators/ModalQRScannerStackNavigator';
import { EventRegister } from 'react-native-event-listeners';
import RNQRCodeScanner from 'react-native-qrcode-scanner';
import colors from 'constants/colors';
import strings from 'constants/strings';

interface QRCodeScannerProps {
  
}

type QRCodeScannerParams = {
  QRScannerListener: {
    params: QRScannerListenerParams
  }
}

export const QRCodeScanner: React.FC<QRCodeScannerProps> = (props) => {
  // Lifecycle Setup
  useEffect(() => {componentDidMount()},[])
  useEffect(() => {return () => {componentWillUnmount()}}, [])
  const navigation = useNavigation()
  const route = useRoute<RouteProp<QRCodeScannerParams, 'QRScannerListener'>>()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: strings.qrScannerScreen.title,
      headerLeft: () => (
        <IconButton style={{margin: 10}} iconColor={colors.white} iconName={'close'} onPress={onCancel}/>
      ),
    });
  }, [navigation]);

  // Component Lifecycle
  const componentDidMount = () => {}
  const componentWillUnmount = () => {}

  const onRead = (event: any) => {
    EventRegister.emit(route.params.params.onQRScanSuccessEventKey, event.data)
    navigation.goBack()
  }

  const onCancel = () => {
    EventRegister.emit(route.params.params.onQRScanCancelEventKey)
    navigation.goBack()
  }

  // Component Render
  return (
    <RNQRCodeScanner
      onRead={onRead}
      topViewStyle={{flex: 0}}
      cameraStyle={{height: Dimensions.get('window').height}}
      bottomViewStyle={{flex: 0}}/>
  );
}

const styles = StyleSheet.create({
  
})