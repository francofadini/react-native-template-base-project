import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import colors from 'constants/colors';
import strings from 'constants/strings';
import { Image } from 'react-native';
import { View } from 'components/View';
import { Button } from '@ant-design/react-native';
import { Text } from 'components/Text';
import { Separator } from 'components/Separator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ModalActivityIndicator } from 'components/ModalActivityIndicator';
import { TextInput } from 'components/TextInput';
import { imagePlaceholder } from 'assets';
import Auth0 from 'react-native-auth0';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  BASE_PROJECT_AUTH0_CLIENT_ID,
  BASE_PROJECT_AUTH0_DOMAIN,
} from 'constants/env';
import { Modal } from 'components/Modal';

const auth0 = new Auth0({
  domain: BASE_PROJECT_AUTH0_DOMAIN,
  clientId: BASE_PROJECT_AUTH0_CLIENT_ID,
});

interface Auth0LoginProps {}

export const Auth0Register: React.FC<Auth0LoginProps> = () => {
  const navigation: StackNavigationProp<ParamListBase> = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: strings.auth0RegisterScreen.title,
    });
  }, [navigation]);

  // Component State
  const [isLoading, setIsLoading] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [repeatPasswordInput, setRepeatPasswordInput] = useState('');

  const onRegisterButtonPressed = () => {
    setIsLoading(true);

    if (!emailInput) {
      setIsLoading(false);
      showError(
        strings.auth0RegisterScreen.errors.invalidInputTitle,
        strings.auth0RegisterScreen.errors.invalidEmailInput,
      );
      return;
    }
    if (!passwordInput) {
      setIsLoading(false);
      showError(
        strings.auth0RegisterScreen.errors.invalidInputTitle,
        strings.auth0RegisterScreen.errors.invalidPasswordInput,
      );
      return;
    }

    if (repeatPasswordInput != passwordInput) {
      setIsLoading(false);
      showError(
        strings.auth0RegisterScreen.errors.invalidInputTitle,
        strings.auth0RegisterScreen.errors.repeatPasswordError,
      );
      return;
    }
    auth0.auth
      .createUser({
        email: emailInput,
        password: passwordInput,
        connection: 'Username-Password-Authentication',
      })
      .then(async () => {
        showError(
          strings.auth0RegisterScreen.successRegisterTitle,
          strings.auth0RegisterScreen.successRegisterMessage,
        );
        setIsLoading(false);
        navigation.goBack();
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        showError(
          strings.auth0RegisterScreen.errors.defaultErrorTitle,
          strings.auth0RegisterScreen.errors.unknownCredentialsErrorMessage,
        );
      });
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
          placeholder={strings.auth0RegisterScreen.emailPlaceholder}
          value={emailInput}
          onChangeText={(text) => setEmailInput(text)}
        />
        <TextInput
          style={styles.input}
          placeholder={strings.auth0RegisterScreen.passwordPlaceholder}
          value={passwordInput}
          secureTextEntry={true}
          onChangeText={(text) => setPasswordInput(text)}
        />
        <TextInput
          style={styles.input}
          placeholder={strings.auth0RegisterScreen.repeatPasswordPlaceholder}
          value={repeatPasswordInput}
          secureTextEntry={true}
          onChangeText={(text) => setRepeatPasswordInput(text)}
        />
        <Button
          style={styles.registerButton}
          type={'primary'}
          onPress={onRegisterButtonPressed}
        >
          <Text>{strings.auth0RegisterScreen.registerLabel}</Text>
        </Button>
      </View>

      <View style={styles.separatorContainer}>
        <Separator style={{ flex: 1 }} />
        <Text style={styles.separatorO}>O</Text>
        <Separator style={{ flex: 1 }} />
      </View>

      {/*<IconButton*/}
      {/*    style={styles.facebookButton}*/}
      {/*    iconName={"facebook"}*/}
      {/*    textColor={colors.white}*/}
      {/*    iconColor={colors.white}*/}
      {/*    onPress={onFacebookLoginPressed}>*/}
      {/*  {strings.auth0RegisterScreen.loginWithFacebook}*/}
      {/*</IconButton>*/}
      {/*<IconButton*/}
      {/*    style={styles.googleButton}*/}
      {/*    iconName={"google"}*/}
      {/*    textColor={colors.white}*/}
      {/*    iconColor={colors.white}*/}
      {/*    onPress={onGoogleLoginPressed}>*/}
      {/*  {strings.auth0RegisterScreen.loginWithGoogle}*/}
      {/*</IconButton>*/}

      <Text variant={'subtitle'} style={styles.alreadyAccountLabel}>
        {strings.auth0RegisterScreen.alreadyHaveAccountLabel}
      </Text>
      <Button
        style={styles.loginButton}
        type={'ghost'}
        onPress={() => {
          navigation.navigate('Auth0Login');
        }}
      >
        <Text>{strings.auth0RegisterScreen.loginLabel}</Text>
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
  registerButton: {
    marginHorizontal: 50,
    marginVertical: 20,
  },
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
  alreadyAccountLabel: {
    alignSelf: 'center',
    marginTop: 20,
    color: colors.grayDark,
  },
  loginButton: {
    marginHorizontal: 80,
    marginVertical: 15,
  },
});
