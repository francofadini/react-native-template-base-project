import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from 'constants/colors';
import strings from 'constants/strings';
import { EventRegister } from 'react-native-event-listeners';
import { IconButton } from 'components/IconButton';
import { Image } from 'react-native';
import { View } from 'components/View';
import { Button } from '@ant-design/react-native';
import { Text } from 'components/Text';
import { Separator } from 'components/Separator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ModalActivityIndicator } from 'components/ModalActivityIndicator';
import { imagePlaceholder } from 'assets';
import {
  AUTH0_AUTH_CANCELED,
  AUTH0_AUTH_SUCCESS,
} from 'services/auth/auth0-authenticator';
import Auth0 from 'react-native-auth0';
import {
  BASE_PROJECT_AUTH0_AUDIENCE,
  BASE_PROJECT_AUTH0_CLIENT_ID,
  BASE_PROJECT_AUTH0_DOMAIN,
} from 'constants/env';
import { useAuth0UserService } from 'services/user/user.service';
import { TextInput } from 'components/TextInput';
import { Modal } from 'components/Modal';

const auth0 = new Auth0({
  domain: BASE_PROJECT_AUTH0_DOMAIN,
  clientId: BASE_PROJECT_AUTH0_CLIENT_ID,
});

interface Auth0LoginProps {}

export const Auth0Login: React.FC<Auth0LoginProps> = () => {
  const navigation = useNavigation();
  const userService = useAuth0UserService();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: strings.auth0LoginScreen.title,
      headerLeft: () => (
        <IconButton
          style={{ margin: 10 }}
          iconColor={colors.white}
          iconName={'close'}
          onPress={onCancel}
        />
      ),
    });
  });

  // Component State
  const [isLoading, setIsLoading] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  // Component Events
  const onCancel = () => {
    EventRegister.emit(AUTH0_AUTH_CANCELED);
    navigation.goBack();
  };

  const onLoginButtonPressed = () => {
    setIsLoading(true);

    if (!emailInput) {
      setIsLoading(false);
      showError(
        strings.auth0LoginScreen.errors.invalidInputTitle,
        strings.auth0LoginScreen.errors.invalidEmailInput,
      );
      return;
    }
    if (!passwordInput) {
      setIsLoading(false);
      showError(
        strings.auth0LoginScreen.errors.invalidInputTitle,
        strings.auth0LoginScreen.errors.invalidPasswordInput,
      );
      return;
    }
    auth0.auth
      .passwordRealm({
        username: emailInput,
        password: passwordInput,
        audience: BASE_PROJECT_AUTH0_AUDIENCE,
        realm: 'Username-Password-Authentication',
      })
      .then(async (result) => {
        userService
          .getUserInfo(result.accessToken)
          .then(() => {
            EventRegister.emit(AUTH0_AUTH_SUCCESS, result);
            setIsLoading(false);
            navigation.goBack();
          })
          .catch(() => {
            setIsLoading(false);
            showError(
              strings.auth0LoginScreen.errors.defaultErrorTitle,
              strings.auth0LoginScreen.errors.newProfileErrorMessage,
            );
          });
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        showError(
          strings.auth0LoginScreen.errors.defaultErrorTitle,
          strings.auth0LoginScreen.errors.defaultErrorMessage,
        );
      });
  };

  const onForgotPasswordPressed = () => {
    Modal.prompt(
      strings.auth0LoginScreen.forgotPasswordTitle,
      strings.auth0LoginScreen.forgotPasswordMessage,
      (email) => {
        auth0.auth.resetPassword({
          email: email,
          connection: 'Username-Password-Authentication',
        });
      },
      'default',
      undefined,
      [strings.auth0LoginScreen.emailPlaceholder],
    );
  };

  const showError = (title: string, message: string) => {
    Modal.simpleAlert(title, message);
  };

  // Component Render
  return (
    <KeyboardAwareScrollView style={styles.scrollView}>
      <ModalActivityIndicator show={isLoading} />

      <Image style={styles.logoImage} source={imagePlaceholder} />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={strings.auth0LoginScreen.emailPlaceholder}
          value={emailInput}
          onChangeText={(text) => setEmailInput(text)}
        />
        <TextInput
          style={styles.input}
          placeholder={strings.auth0LoginScreen.passwordPlaceholder}
          value={passwordInput}
          secureTextEntry={true}
          onChangeText={(text) => setPasswordInput(text)}
        />
        <Text
          style={styles.forgotPasswordLabel}
          onPress={onForgotPasswordPressed}
        >
          {strings.auth0LoginScreen.forgotPasswordLabel}
        </Text>
        <Button
          style={styles.loginButton}
          type={'primary'}
          onPress={onLoginButtonPressed}
        >
          <Text style={styles.loginButtonLabel}>
            {strings.auth0LoginScreen.loginLabel}
          </Text>
        </Button>
      </View>

      <View style={styles.separatorContainer}>
        <Separator style={{ flex: 1 }} />
        <Text style={styles.separatorO}>O</Text>
        <Separator style={{ flex: 1 }} />
      </View>

      {/*<IconButton*/}
      {/*  style={styles.facebookButton}*/}
      {/*  iconName={'facebook'}*/}
      {/*  textColor={colors.white}*/}
      {/*  iconColor={colors.white}*/}
      {/*  onPress={onFacebookLoginPressed}>*/}
      {/*  {strings.auth0LoginScreen.loginWithFacebook}*/}
      {/*</IconButton>*/}
      {/*<IconButton*/}
      {/*  style={styles.googleButton}*/}
      {/*  iconName={'google'}*/}
      {/*  textColor={colors.white}*/}
      {/*  iconColor={colors.white}*/}
      {/*  onPress={onGoogleLoginPressed}>*/}
      {/*  {strings.auth0LoginScreen.loginWithGoogle}*/}
      {/*</IconButton>*/}

      <Text variant={'subtitle'} style={styles.noAccountLabel}>
        {strings.auth0LoginScreen.dontHaveAccountLabel}
      </Text>
      <Button
        style={styles.registerButton}
        type={'ghost'}
        onPress={() => {
          navigation.navigate('Auth0Register');
        }}
      >
        <Text style={styles.loginButtonLabel}>
          {strings.auth0LoginScreen.registerLabel}
        </Text>
      </Button>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  logoImage: {
    height: 100,
    width: 100,
    marginTop: 50,
    alignSelf: 'center',
  },
  form: {
    marginTop: 50,
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginHorizontal: 50,
    marginVertical: 20,
    paddingVertical: 10,
  },
  forgotPasswordLabel: {
    color: colors.primary,
    alignSelf: 'flex-end',
    marginRight: 30,
    paddingTop: 0,
    padding: 20,
  },
  loginButton: {
    marginHorizontal: 50,
    marginVertical: 20,
  },
  loginButtonLabel: {},
  separatorContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  separatorO: {
    margin: 10,
    color: colors.separator,
  },
  facebookButton: {
    backgroundColor: '#3b5998',
    marginHorizontal: 50,
    marginVertical: 15,
    padding: 10,
    borderRadius: 5,
  },
  googleButton: {
    backgroundColor: '#dd4b39',
    marginHorizontal: 50,
    padding: 10,
    borderRadius: 5,
  },
  noAccountLabel: {
    alignSelf: 'center',
    marginTop: 20,
    color: colors.grayDark,
  },
  registerButton: {
    marginHorizontal: 80,
    marginVertical: 15,
  },
});
