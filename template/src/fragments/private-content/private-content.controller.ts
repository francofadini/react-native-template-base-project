import { useState } from 'react';
import { PrivateContentController } from 'fragments/private-content/interfaces';
import { AuthService } from 'services/auth/auth.service';
import { useMessenger } from 'tools/view-hooks/messenger-hook';
import strings from 'constants/strings';

export const usePrivateContentController = (
  authService: AuthService,
  // eslint-disable-next-line react-hooks/rules-of-hooks
  messenger = useMessenger(),
): PrivateContentController => {
  /* State */
  const [isLoading, setIsLoading] = useState(false);

  /* Listeners */
  // Ex. useEffect(() => { onSessionUpdate(); }, [session]);

  /* View Events */
  const onLoginButtonPressed = () => {
    startLogin();
  };

  const onSignUpButtonPressed = () => {
    startSignUp();
  };

  /* Private Methods */
  const startLogin = () => {
    setIsLoading(true);
    authService
      .login()
      .catch(() => {
        messenger.showErrorMessage(
          strings.privateContentScreen.errors.genericLoginMessage,
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const startSignUp = () => {
    setIsLoading(true);
    authService
      .signup()
      .catch(() => {
        messenger.showErrorMessage(
          strings.privateContentScreen.errors.genericLoginMessage,
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Return state and events
  return { isLoading, onLoginButtonPressed, onSignUpButtonPressed };
};
