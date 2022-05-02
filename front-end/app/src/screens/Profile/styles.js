import React from "react";
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #63C2D1;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 10px 20px;
`;

export const HeaderArea = styled.View`
    height: 40px;
    border-radius: 20px;
    margin-bottom: 30px;
    width: 91%;
    left: 8%;
`;

export const HeaderTitle = styled.Text`
width: 250px;
font-size: 24px;
font-weight: bold;
color: #FFF;
`;
export const PerfilArea = styled.View`
    flex: 1;
    background-color: #FFF;
`;

export const PerfilUserArea = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;

export const PerfilUserAvatar = styled.Image`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    margin: 30px 0 20px 0;
    
`;

export const PerfilUserNick = styled.Text`
    font-weight: bold;
    font-size: 22px;
    color: #000;
`;

export const PerfilUserEmail = styled.Text``;

export const PerfilInfoArea = styled.View`
    flex: 1;
    padding: 20px;
`;

export const PerfilInfoAreaWhite = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 2px 10px;
`;
export const PerfilInfoAreaBlue = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background-color: #E0F0F2;
    padding: 2px 10px;
`;

export const PerfilInfoText = styled.Text`
    font-weight: bold;
    font-size: 14px;
    color: #000;
`;






