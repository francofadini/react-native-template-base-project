import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SecureComponent from 'components/SecureComponent';
import { ProfileScreen } from 'screens/profile/ProfileScreen';
import strings from 'constants/strings';
import { DefaultNavigatorScreenOptions } from 'navigators/DefaultNavigatorScreenOptions';

const Stack = createStackNavigator();

export const SecureProfileScreen = () => (<SecureComponent component={<ProfileScreen/>}/>)

function ProfileStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={DefaultNavigatorScreenOptions}>
      <Stack.Screen 
        name="Account"
        options={{
          title: strings.profileScreen.title
        }}
        component={SecureProfileScreen}/>
    </Stack.Navigator>
  );
}

export default ProfileStackNavigator;