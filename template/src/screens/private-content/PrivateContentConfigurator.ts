import PrivateContentPresenter, { PrivateContentView } from 'screens/private-content/PrivateContentPresenter';
import { Session } from 'models/session.model';
import { Auth0Service } from 'services/auth/auth0-auth.service';
import { LocalSessionService } from 'services/session/local-session.service';

export default class PrivateContentConfigurator {
    static buildPresenter = (view: PrivateContentView, setSession: (session: Session) => void) => {
        let sessionService = new LocalSessionService(setSession)
        let authService = new Auth0Service(sessionService)
        return new PrivateContentPresenter(view, authService)
    }
}