import React from 'react';
import { Modal as ANTModal } from '@ant-design/react-native';
import strings from 'constants/strings';


export class Modal extends ANTModal {
  public static simpleAlert(title: string, message: string) {
    Modal.alert(title,message,[{text: strings.alert.okLabel}])
  }

  public static actionAlert(title: string, message: string, actionTitle: string, action: ()=>void, cancelLabel?: string) {
    Modal.alert(title,message,[
      {
        text: cancelLabel ?? strings.alert.cancelLabel,
        style: 'cancel'
      },
      {
        text: actionTitle,
        onPress: action
      }
    ])
  }
}