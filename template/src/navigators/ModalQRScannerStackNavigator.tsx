import React from 'react';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { QRCodeScanner } from 'components/QRCodeScanner';
import { DefaultNavigatorScreenOptions } from 'navigators/DefaultNavigatorScreenOptions';

const Stack = createStackNavigator();

export type QRScannerListenerParams = {
  onQRScanSuccessEventKey: string
  onQRScanCancelEventKey: string
}

type ModalQRCodeScannerParams = {
  QRScannerListener: QRScannerListenerParams
}

type Props = StackScreenProps<ModalQRCodeScannerParams, 'QRScannerListener'>;

function ModalQRScannerStackNavigator({ route }: Props) {
  return (
    <Stack.Navigator
      screenOptions={DefaultNavigatorScreenOptions}>
      <Stack.Screen 
        name="QRScanner"
        component={QRCodeScanner}
        initialParams={route.params}/>
    </Stack.Navigator>
  );
}

export default ModalQRScannerStackNavigator;