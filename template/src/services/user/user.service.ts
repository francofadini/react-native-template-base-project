import { useLocalSession } from 'tools/session/session.hooks';
import { Auth0UserService } from 'services/user/auth0-user.service';
import { UserDto } from 'services/user/dtos/user.dto';

export interface UserService {
  getUserInfo(token?: string): Promise<UserDto>;
}

export const useAuth0UserService = (): UserService => {
  const [session] = useLocalSession();
  return new Auth0UserService(session);
};
