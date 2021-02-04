import { AuthService, LogoutService } from 'services/auth/auth.service';
import Auth0 from 'react-native-auth0';
import {
  BASE_PROJECT_AUTH0_DOMAIN,
  BASE_PROJECT_AUTH0_CLIENT_ID,
  BASE_PROJECT_AUTH0_AUDIENCE,
} from 'constants/env';
import { Session } from 'tools/session/session';
import { Auth0Authenticator } from 'services/auth/auth0-authenticator';

const auth0 = new Auth0({
  domain: BASE_PROJECT_AUTH0_DOMAIN,
  clientId: BASE_PROJECT_AUTH0_CLIENT_ID,
});

const scope = 'openid profile email nomad office';
const nomadAPIAudience = BASE_PROJECT_AUTH0_AUDIENCE;

export class Auth0Service implements AuthService {
  constructor(
    private session: Session,
    private setSession: (session: Session) => void,
    private killSession: () => void,
    private authenticator: Auth0Authenticator,
  ) {}

  async login(): Promise<Session> {
    let accessToken = await this.authenticator.authorize();
    let session = new Session(accessToken, []);
    this.setSession(session);
    return session;
  }

  // TODO - Migrate to new auth flow
  async signup(): Promise<Session> {
    let credentials = await auth0.webAuth.authorize({
      prompt: 'signUp',
      scope: scope,
      audience: nomadAPIAudience,
    });
    let permissions = credentials.scope.split(' ');
    let session = new Session(credentials.accessToken, permissions);
    this.setSession(session);
    return session;
  }

  async logout() {
    auth0.webAuth.clearSession().then(() => {
      this.killSession();
    });
  }
}

export class Auth0LogoutService implements LogoutService {
  constructor(private killSession: () => void) {}
  async logout() {
    auth0.webAuth.clearSession().then(() => {
      this.killSession();
    });
  }
}
