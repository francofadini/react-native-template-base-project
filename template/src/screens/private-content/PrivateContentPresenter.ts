import { AuthService } from 'services/auth/auth.service';
import strings from 'constants/strings';
import { Platform } from 'react-native';

export interface PrivateContentView {
    showLoader(): void
    hideLoader(): void
    showActionAlert(title: string, message: string, actionLabel: string, action: ()=>void): void
    showError(title: string, message: string): void
}

export default class PrivateContentPresenter {
    private view: PrivateContentView
    private authService: AuthService

    constructor (view: PrivateContentView, authService: AuthService ){
        this.view = view
        this.authService = authService
    }

    public onLoginButtonPressed = () => {
        if (Platform.OS === 'ios') {
            this.alertForPermissions(this.startLogin)
        } else {
            this.startLogin()
        }
    }

    public onSignUpButtonPressed = () => {
        if (Platform.OS === 'ios') {
            this.alertForPermissions(this.startSignUp)
        } else {
            this.startSignUp()
        }
    }

    private alertForPermissions = (callback: ()=>void) => {
        this.view.showActionAlert(
            strings.privateContentScreen.authPermissionTitle,
            strings.privateContentScreen.authPermissionMessage,
            strings.privateContentScreen.authPermissionButtonLabel,
            callback
        )
    }

    private startLogin = () => {
        this.view.showLoader()
        this.authService.login()
        .catch((error) => {
            this.view.hideLoader()
            this.view.showError(
                strings.privateContentScreen.errors.genericLoginTitle,
                strings.privateContentScreen.errors.genericLoginMessage)
        }) 
    }

    private startSignUp = () => {
        this.view.showLoader()
        this.authService.signup()
        .catch((error) => {
            this.view.hideLoader()
            this.view.showError(
                strings.privateContentScreen.errors.genericLoginTitle,
                strings.privateContentScreen.errors.genericLoginMessage)
        }) 
    }
}