import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners';

export const AUTH0_AUTH_SUCCESS = 'AUTH0_AUTH_SUCCESS';
export const AUTH0_AUTH_FAIL = 'AUTH0_AUTH_FAIL';
export const AUTH0_AUTH_CANCELED = 'AUTH0_AUTH_CANCELED';

export class Auth0Authenticator {
  constructor(private navigation: StackNavigationProp<ParamListBase>) {}

  async authorize(): Promise<string> {
    this.navigation.navigate('Auth0AuthModal', { data: '' });
    return new Promise<string>((resolve, reject) => {
      EventRegister.addEventListener(AUTH0_AUTH_SUCCESS, (result: any) => {
        EventRegister.removeEventListener(AUTH0_AUTH_SUCCESS);
        resolve(result.accessToken);
      });
      EventRegister.addEventListener(AUTH0_AUTH_FAIL, () => {
        EventRegister.removeEventListener(AUTH0_AUTH_FAIL);
        reject();
      });
      EventRegister.addEventListener(AUTH0_AUTH_CANCELED, () => {
        EventRegister.removeEventListener(AUTH0_AUTH_CANCELED);
        resolve();
      });
    });
  }
}
