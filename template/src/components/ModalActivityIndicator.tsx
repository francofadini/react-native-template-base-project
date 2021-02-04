import React from 'react';
import { ActivityIndicator, Modal } from '@ant-design/react-native';

interface ModalActivityIndicatorProps {
  show: boolean;
}

export const ModalActivityIndicator: React.FC<ModalActivityIndicatorProps> = (
  props,
) => {
  return (
    <Modal
      visible={props.show}
      maskClosable={false}
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}
      transparent={true}
    >
      <ActivityIndicator animating={true} size={'large'} toast />
    </Modal>
  );
};
