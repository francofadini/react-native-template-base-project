export interface PrivateContentController {
  /* State */
  isLoading: boolean;
  /* Events */
  onLoginButtonPressed: () => void;
  onSignUpButtonPressed: () => void;
}

export interface PrivateContentFragmentProps {
  useController?: () => PrivateContentController;
}
