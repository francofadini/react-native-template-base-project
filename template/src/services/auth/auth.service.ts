import { useLocalSession } from 'tools/session/session.hooks';
import {
  Auth0LogoutService,
  Auth0Service,
} from 'services/auth/auth0-auth.service';
import { Session } from 'tools/session/session';
import { Auth0Authenticator } from 'services/auth/auth0-authenticator';

export interface AuthService {
  login(): Promise<Session>;
  signup(): Promise<Session>;
  logout(): void;
}

export interface LogoutService {
  logout(): void;
}

export const useAuth0AuthService = (
  authenticator: Auth0Authenticator,
): AuthService => {
  const [session, setSession, killSession] = useLocalSession();
  return new Auth0Service(session, setSession, killSession, authenticator);
};

export const useAuth0LogoutService = (): LogoutService => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [session, setSession, killSession] = useLocalSession();
  return new Auth0LogoutService(killSession);
};
