import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SecureComponent from 'components/SecureComponent';
import strings from 'constants/strings';
import { DefaultNavigatorScreenOptions } from 'navigators/DefaultNavigatorScreenOptions';
import { ProfileFragment } from 'fragments/profile/profile.fragment';

const Stack = createStackNavigator();

export const SecureProfileScreen = () => (
  <SecureComponent component={<ProfileFragment />} />
);

function ProfileStackNavigator() {
  return (
    <Stack.Navigator screenOptions={DefaultNavigatorScreenOptions}>
      <Stack.Screen
        name="Account"
        options={{
          title: strings.profileScreen.title,
        }}
        component={SecureProfileScreen}
      />
    </Stack.Navigator>
  );
}

export default ProfileStackNavigator;
