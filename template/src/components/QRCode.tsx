import React from 'react';
import RNQRCode, { QRCodeProps } from 'react-native-qrcode-svg'


export const QRCode: React.FC<QRCodeProps> = (props) => {
  return (<RNQRCode {...props}>{props.children}</RNQRCode>)
}