import { useEffect, useState } from 'react';
import { ProfileController } from 'fragments/profile/interfaces';
import { useAuth0UserService } from 'services/user/user.service';
import { useAuth0LogoutService } from 'services/auth/auth.service';
import { useMessenger } from 'tools/view-hooks/messenger-hook';
import strings from 'constants/strings';
import { UserDto } from 'services/user/dtos/user.dto';

export const useProfileController = (
  // eslint-disable-next-line react-hooks/rules-of-hooks
  userService = useAuth0UserService(),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  logoutService = useAuth0LogoutService(),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  messenger = useMessenger(),
): ProfileController => {
  /* State */
  const [userName, setUserName] = useState<string>();
  const [userEmail, setUserEmail] = useState<string>();
  const [isRefreshing, setIsRefreshing] = useState(false);

  /* Listeners */
  useEffect(() => {
    onViewMounted();
  });

  /* View Events */
  const onViewMounted = () => {
    userService
      .getUserInfo()
      .then((user: UserDto) => {
        setUserName(user.name);
        setUserEmail(user.email);
      })
      .catch(() => {
        messenger.showErrorMessage(
          strings.profileScreen.errors.profileErrorMessage,
        );
      });
  };

  const onLogoutButtonPressed = () => {
    logoutService.logout();
  };

  const onRefreshPulled = () => {
    setIsRefreshing(true);
    userService
      .getUserInfo()
      .then((user: UserDto) => {
        setUserName(user.name);
        setUserEmail(user.email);
      })
      .finally(() => {
        setIsRefreshing(false);
      });
  };

  /* Private Methods */
  //Ex. const increaseCount = () => {}

  // Return state and events
  return {
    userName,
    userEmail,
    isRefreshing,
    onLogoutButtonPressed,
    onRefreshPulled,
  };
};
