import { Toast } from '@ant-design/react-native';
import { Modal } from 'components/Modal';

export interface UIMessenger {
  showErrorMessage(message: string): void;
  showErrorModal(title: string, message: string): void;
  showSuccessMessage(message: string): void;
}

export const useMessenger = (): UIMessenger => {
  const showErrorMessage = (errorMessage: string) => {
    Toast.fail({ content: errorMessage });
  };

  const showErrorModal = (title: string, message: string) => {
    Modal.simpleAlert(title, message);
  };

  const showSuccessMessage = (successMessage: string) => {
    Toast.success({ content: successMessage });
  };

  return { showErrorMessage, showErrorModal, showSuccessMessage };
};
