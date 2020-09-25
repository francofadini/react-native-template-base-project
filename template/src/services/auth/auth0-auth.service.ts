import { Session } from "models/session.model";
import { AuthService } from "services/auth/auth.service";
import Auth0 from 'react-native-auth0';
import { SessionService } from "services/session/session.service";
import { BASE_PROJECT_AUTH0_DOMAIN, BASE_PROJECT_AUTH0_CLIENT_ID, BASE_PROJECT_AUTH0_AUDIENCE } from "tools/env/env-tool";

const auth0 = new Auth0({ domain: BASE_PROJECT_AUTH0_DOMAIN, clientId: BASE_PROJECT_AUTH0_CLIENT_ID });

const scope = "openid profile email nomad office"
const nomadAPIAudience = BASE_PROJECT_AUTH0_AUDIENCE

export class Auth0Service implements AuthService {

  private sessionService: SessionService

  constructor (sessionService: SessionService) {
    this.sessionService = sessionService
  }

  async login(): Promise<Session> {
    let credentials = await auth0.webAuth
    .authorize({scope: scope, audience:nomadAPIAudience})
    let permissions = credentials.scope.split(" ")
    let session = new Session(credentials.accessToken, permissions)
    this.sessionService.saveCurrentSession(session)
    return session
  }

  async signup(): Promise<Session> {
    let credentials = await auth0.webAuth
    .authorize({prompt: 'signUp', scope: scope, audience:nomadAPIAudience})
    let permissions = credentials.scope.split(" ")
    let session = new Session(credentials.accessToken, permissions)
    this.sessionService.saveCurrentSession(session)
    return session
  }

  async logout() {
    auth0.webAuth.clearSession()
    .then(() => {
      this.sessionService.removeCurrentSession()
    })
  }
}