import { ProfileService } from 'services/profile/profile.service';
import { User } from 'models/user.model';
import { AuthService } from 'services/auth/auth.service';
import strings from 'constants/strings';
import { ScreenNavigator } from 'navigators/ScreenNavigator';

export interface ProfileView {
    renderViewModel(viewModel: ProfileViewModel): void
    stopRefreshing(): void
    showAlert(title: string, message: string): void
}

export interface ProfileViewModel {
    userName: string,
    userEmail: string
}

export default class ProfilePresenter {
    private view: ProfileView
    private navigator: ScreenNavigator
    private authService: AuthService
    private profileService: ProfileService

    constructor (view: ProfileView, navigator: ScreenNavigator, authService: AuthService, profileService: ProfileService){
        this.view = view
        this.navigator = navigator
        this.authService = authService
        this.profileService = profileService
    }

    public onViewDidMount = () => {
        this.profileService.getUserInfo()
        .then((user: User) => {
            this.view.renderViewModel({
                userName: user.name,
                userEmail: user.email
            })
        })
        .catch((error) => {
            this.view.showAlert(
                strings.profileScreen.errors.profileErrorTitle,
                strings.profileScreen.errors.profileErrorMessage)
        })
    }

    public onRefreshPulled = () => {
        this.profileService.getUserInfo()
        .then((user: User) => {
            this.view.stopRefreshing()
            this.view.renderViewModel({
                userName: user.name,
                userEmail: user.email
            })
        })
        .catch((error) => {
            this.view.stopRefreshing()
        })
    }

    public onLogoutButtonPressed = () => {
        this.authService.logout()
    }
}