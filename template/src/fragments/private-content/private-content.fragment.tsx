import React from 'react';
import { PrivateContentFragmentProps } from 'fragments/private-content/interfaces';
import { usePrivateContentController } from 'fragments/private-content/private-content.controller';
import styles from 'fragments/private-content/private-content.styles';
import { Image } from 'components/Image';
import { iconLoading, loginNeeded } from 'assets';
import { Text } from 'components/Text';
import strings from 'constants/strings';
import { Button } from 'components/Button';
import { View } from 'components/View';
import { useAuth0AuthService } from 'services/auth/auth.service';
import { Auth0Authenticator } from 'services/auth/auth0-authenticator';
import { useNavigation } from '@react-navigation/native';

export const PrivateContentFragment: React.FC<PrivateContentFragmentProps> = (
  props,
) => {
  const { useController = usePrivateContentController } = props;
  const controller = useController(
    useAuth0AuthService(new Auth0Authenticator(useNavigation())),
  );

  // Render
  return (
    <View style={styles.root}>
      <Image
        style={controller.isLoading ? styles.imageLoading : styles.image}
        source={controller.isLoading ? iconLoading : loginNeeded}
      />
      <Text style={styles.label}>
        {controller.isLoading
          ? strings.privateContentScreen.loadingMessage
          : strings.privateContentScreen.message}
      </Text>
      {controller.isLoading ? null : (
        <>
          <Button
            style={styles.button}
            type={'primary'}
            onPress={controller.onLoginButtonPressed}
          >
            <Text style={styles.buttonLabel}>
              {strings.privateContentScreen.loginButtonTitle}
            </Text>
          </Button>
          {/* <Button style={styles.button}
                type={'primary'}
                onPress={controller.onSignUpButtonPressed}>
            <Text style={styles.buttonLabel}>
                 {strings.privateContentScreen.signUpTitle}
            </Text>
        </Button> */}
        </>
      )}
    </View>
  );
};
