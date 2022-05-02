import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext} from '../../contexts/UserContext';

import { Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

import Api from '../../Api';

import SignInput from '../../components/SignInput';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import PasswordIcon from '../../assets/lock.svg';

export default () => {
    const {dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignInClick = async () =>{

        if(emailField != '' && passwordField != ''){
            let json =await Api.signIn(emailField, passwordField);
            if(json.token){
                await AsyncStorage.setItem('token', json.token);
                userDispatch({
                        type: 'setAvatar',
                        payload: {
                            avatar: json.data.avatar
                        }
                });
                userDispatch({
                        type: 'setName',
                        payload: {
                            name: json.data.name
                        }
                });
                userDispatch({
                        type: 'setEmail',
                        payload: {
                            email: json.data.email
                        }
                });




                navigation.reset({
                    routes: [{name: 'MainTab'}]
                });

            }else{
                alert('E-mail e/ou senha incorretos')
            }
        }else{

        }

    };

    const handleMessageButtonClick = () =>{

        navigation.reset({
             routes: [{name: 'SignUp'}]
            });

    };

    return (
        <Container>
            <BarberLogo width="100%" height="160" />

            <InputArea>
              
                <SignInput
                    IconSvg={EmailIcon} 
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                    password = {false}
                />
                <SignInput
                    IconSvg={PasswordIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password = {true}                
                />

                <CustomButton onPress={handleSignInClick}>
                        <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}