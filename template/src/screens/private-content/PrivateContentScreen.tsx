import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'components/View';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import strings from 'constants/strings';
import PrivateContentPresenter, { PrivateContentView } from 'screens/private-content/PrivateContentPresenter';
import PrivateContentConfigurator from 'screens/private-content/PrivateContentConfigurator';
import { Image } from 'components/Image';
import { loginNeeded, iconLoading} from 'assets';
import { SessionContext } from 'tools/session/session.context';
import { Modal } from 'components/Modal';

interface PrivateContentScreenProps {

}

export const PrivateContentScreen: React.FC<PrivateContentScreenProps> = (props) => {

    // Hooks
    useEffect(() => {componentDidMount()},[])
    useEffect(() => {return () => {componentWillUnmount()}}, []);
    const { setSession } = useContext(SessionContext)

    // Component Lifecycle
    const componentDidMount = () => {}
    const componentWillUnmount = () => {}

    // Component State
    const [isLoading, setIsLoading] = useState(false);

    // View Interface
    const view: PrivateContentView  =  {
        showLoader() {
            setIsLoading(true)
        },
        hideLoader() {
            setIsLoading(false)
        },
        showActionAlert(title: string, message: string, actionLabel: string, action: ()=>void) {
            Modal.actionAlert(title,message,actionLabel,action)
        },
        showError(title: string, message: string) {
            Modal.simpleAlert(title,message)
        }
    }

    // Architecture tools
    const presenter: PrivateContentPresenter = PrivateContentConfigurator.buildPresenter(view, setSession);

    // Component Render
    return (
        <View style={styles.root}>
        <Image style={isLoading ? styles.imageLoading : styles.image} source={isLoading ? iconLoading : loginNeeded}/>
        <Text style={styles.label}>
            {isLoading ? strings.privateContentScreen.loadingMessage : strings.privateContentScreen.message}
        </Text>
        { isLoading ? null :
        <>
        <Button style={styles.button}
                type={'primary'}
                onPress={presenter.onLoginButtonPressed}>
            <Text style={styles.buttonLabel}>
                 {strings.privateContentScreen.loginButtonTitle}
            </Text>
        </Button>
        {/* <Button style={styles.button}
                type={'primary'}
                onPress={presenter.onSignUpButtonPressed}>
            <Text style={styles.buttonLabel}>
                 {strings.privateContentScreen.signUpTitle}
            </Text>
        </Button> */}
        </>
        }
        </View>
    );
}


const styles = StyleSheet.create({
    root : {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      margin: 60
    },
    image: {
        height: 150,
        margin: 30,
        resizeMode: 'contain'
    },
    imageLoading: {
        height: 50,
        margin: 30,
        resizeMode: 'contain'
    },
    label: {
        textAlign: 'center',
        fontSize:20,
        marginBottom: 50,
        color: '#ffab4a',
        fontWeight: 'bold'
    },
    button: {
        marginTop: 20,
        width: 300,
    },
    buttonLabel: {
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})