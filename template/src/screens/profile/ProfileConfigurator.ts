import ProfilePresenter, { ProfileView } from 'screens/profile/ProfilePresenter';
import { Auth0Service } from 'services/auth/auth0-auth.service';
import { LocalSessionService } from 'services/session/local-session.service';
import { Auth0ProfileService } from 'services/profile/auth0-profile.service';
import { Session } from 'models/session.model';
import { ScreenNavigator } from 'navigators/ScreenNavigator';

export default class ProfileConfigurator {
    static buildPresenter = (view: ProfileView, navigator: ScreenNavigator, setSession: (session: Session) => void) => {
        let sessionService = new LocalSessionService(setSession)
        let authService = new Auth0Service(sessionService)
        let profileservice = new Auth0ProfileService(sessionService)
        return new ProfilePresenter(view, navigator, authService, profileservice);
    }
}