import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import ProfilePresenter, { ProfileView, ProfileViewModel } from 'screens/profile/ProfilePresenter';
import ProfileConfigurator from 'screens/profile/ProfileConfigurator';
import { List, ListItem, Brief } from 'components/List';
import { View } from 'components/View';
import { FlatButton } from 'components/Button';
import { ScrollView } from 'components/ScrollView';
import colors from 'constants/colors';
import strings from 'constants/strings';
import { SessionContext } from 'tools/session/session.context';
import { Modal } from 'components/Modal';
import { RefreshControl } from 'components/RefreshControl';
import { ScreenNavigator } from 'navigators/ScreenNavigator';
import { useNavigation, useRoute } from '@react-navigation/native';
import SecureComponent from 'components/SecureComponent';

interface ProfileScreenProps {

}

export const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {

    // Hooks
    useEffect(() => {componentDidMount()},[])
    useEffect(() => {return () => {componentWillUnmount()}}, [])
    const navigation = new ScreenNavigator(useNavigation(), useRoute())
    const { setSession } = useContext(SessionContext)

    // Component Lifecycle
    const componentDidMount = () => {
        presenter.onViewDidMount()
    }
    const componentWillUnmount = () => {}


    // Component State
    const [viewModel, setViewModel] = useState<ProfileViewModel>({
        userName: '',
        userEmail: ''
    });
    const [isRefreshing, setIsRefreshing] = useState(false)

    // View Interface
    const view: ProfileView  =  {
        renderViewModel(viewModel: ProfileViewModel) {
            setViewModel(viewModel)
        },
        stopRefreshing() {
            setIsRefreshing(false)
        },
        showAlert(title: string, message: string) {
            Modal.simpleAlert(title,message)
        }
    }

    // Architecture tools
    const presenter: ProfilePresenter = ProfileConfigurator.buildPresenter(view, navigation, setSession);

    // Component Render
    const Footer = (
        <View style={{margin: 60}}>
            <FlatButton 
                color={colors.red}
                onPress={presenter.onLogoutButtonPressed}>
                    {strings.profileScreen.logout}
            </FlatButton>
        </View>
    )

    return (
        <ScrollView 
            style={styles.scrollView}
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={presenter.onRefreshPulled}/>}>
            <List>
                <ListItem>
                    {viewModel.userName}<Brief>{viewModel.userEmail}</Brief>
                </ListItem>
            </List>
            {Footer}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
      flex: 1
    }
})