import React, { useContext } from "react";
import {Button} from "react-native"
import { useNavigation } from "@react-navigation/native";
import {Container, HeaderArea, HeaderTitle, PerfilArea, PerfilInfoArea, PerfilInfoAreaBlue, PerfilInfoAreaWhite, PerfilInfoText, PerfilUserArea, PerfilUserAvatar, PerfilUserEmail, PerfilUserNick, Scroller} from './styles'

import Api from "../../Api"

import {UserContext} from '../../contexts/UserContext';

export default () => {

    const {state:User} = useContext(UserContext);

    navigation = useNavigation();

    const handleLogoutClick = async () => {
            await Api.logout();
            navigation.reset({
                routes:[{name: 'SignIn'}]
            });

    }

    return(
        <Container>
            <Scroller>
            <HeaderArea>
                        <HeaderTitle>Perfil</HeaderTitle>
                    </HeaderArea>
                <PerfilArea>
                    <PerfilUserArea>
                        <PerfilUserAvatar source ={{uri: User.avatar?User.avatar:"https://i.ibb.co/m4N5g5M/732282758-full-stacker.jpg"}}/>
                        <PerfilUserNick>{User.name}</PerfilUserNick>
                        <PerfilUserEmail>{User.email}</PerfilUserEmail>
                    </PerfilUserArea>
                    <PerfilInfoArea>
                        <PerfilInfoAreaBlue>
                            <PerfilInfoText>Serviços Agendados: </PerfilInfoText>
                            <PerfilInfoText>1</PerfilInfoText>
                        </PerfilInfoAreaBlue>
                        <PerfilInfoAreaWhite>
                            <PerfilInfoText>Serviços Finalizados: </PerfilInfoText>
                            <PerfilInfoText>8</PerfilInfoText>
                        </PerfilInfoAreaWhite>
                        <PerfilInfoAreaBlue>
                            <PerfilInfoText>Serviços Avaliados: </PerfilInfoText>
                            <PerfilInfoText>3</PerfilInfoText>
                        </PerfilInfoAreaBlue>
                        <PerfilInfoAreaWhite>
                            <PerfilInfoText>Serviço mais agendado: </PerfilInfoText>
                            <PerfilInfoText>Corte de Cabelo</PerfilInfoText>
                        </PerfilInfoAreaWhite>
                    </PerfilInfoArea>
                </PerfilArea>
                <Button title="Sair" onPress={handleLogoutClick}/>
            </Scroller>
        </Container>
    );

}

