import React, { useContext } from "react";
import styled from 'styled-components/native';

import {UserContext} from '../contexts/UserContext';

import HomeIcon from "../assets/home.svg"
import SearchIcon from "../assets/search.svg"
import TodayIcon from "../assets/today.svg"
import FavoritesIcon from "../assets/favorite.svg"
import AccountIcon from "../assets/account.svg"



const TabArea = styled.View`
    height: 60px;
    background-color: #4EADBE;
    flex-direction: row;
`;

const TabItem =styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;

`;

const TabItemCenter = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #4EADBE;
    margin-top: -20px;

`;

const AvatarIcon = styled.Image`
    width: 26px;
    height: 26px;
    border-radius: 13px;
`;


export default ({state, navigation}) => {


    const {state:User} = useContext(UserContext);

    const goTo = (screenName) => {
            navigation.navigate(screenName);
    }

    return(
        <TabArea>
                <TabItem onPress={()=>goTo('Home')}>
                    <HomeIcon style = {{opacity: state.index===0?1:0.5}}
                    width='24' height='24' fill='#FFFFFF'/>
                </TabItem>
                <TabItem onPress={()=>goTo('Search')}>
                    <SearchIcon style = {{opacity: state.index===1?1:0.5}}
                    width='24' height='24' fill='#FFFFFF'/>
                </TabItem>
                <TabItemCenter onPress={()=>goTo('Appointments')}>
                    <TodayIcon width='30' height='30' fill='#4EADBE'/>
                </TabItemCenter>
                <TabItem onPress={()=>goTo('Favorites')}>
                    <FavoritesIcon style = {{opacity: state.index===3?1:0.5}}
                    width='24' height='24' fill='#FFFFFF'/>
                </TabItem>
                <TabItem onPress={()=>goTo('Profile')}>
                    {state.avatar !="" ?
                        <AvatarIcon source = {{uri: User.avatar}} width='24' height='24'
                         style = {{opacity: state.index===4?1:0.5}} />:
                        <AccountIcon style = {{opacity: state.index===4?1:0.5}}
                         width='24' height='24' fill='#FFFFFF'/>}
                    
                </TabItem>
        </TabArea>
    )
}