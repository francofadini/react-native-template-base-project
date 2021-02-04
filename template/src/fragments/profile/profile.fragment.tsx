import React from 'react';
import { ProfileFragmentProps } from 'fragments/profile/interfaces';
import { useProfileController } from 'fragments/profile/profile.controller';
import styles from 'fragments/profile/profile.styles';
import { ScrollView } from 'react-native-gesture-handler';
import { RefreshControl } from 'react-native';
import { List } from '@ant-design/react-native';
import { View } from 'components/View';
import { FlatButton } from 'components/Button';
import colors from 'constants/colors';
import strings from 'constants/strings';

export const ProfileFragment: React.FC<ProfileFragmentProps> = (props) => {
  const { useController = useProfileController } = props;
  const controller = useController();

  // Render
  const Footer = (
    <View style={styles.footer}>
      <FlatButton color={colors.red} onPress={controller.onLogoutButtonPressed}>
        {strings.profileScreen.logout}
      </FlatButton>
    </View>
  );

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={controller.isRefreshing}
            onRefresh={controller.onRefreshPulled}
          />
        }
      >
        <List>
          <List.Item>
            {controller.userName}
            <List.Item.Brief>{controller.userEmail}</List.Item.Brief>
          </List.Item>
        </List>
        {Footer}
      </ScrollView>
    </View>
  );
};
