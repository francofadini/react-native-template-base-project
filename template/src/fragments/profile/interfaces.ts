export interface ProfileController {
  /* State */
  userName: string | undefined;
  userEmail: string | undefined;
  isRefreshing: boolean;
  /* Events */
  onLogoutButtonPressed: () => void;
  onRefreshPulled: () => void;
}

export interface ProfileFragmentProps {
  useController?: () => ProfileController;
}
