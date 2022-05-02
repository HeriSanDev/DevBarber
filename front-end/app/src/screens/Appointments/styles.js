import React from "react";
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #63C2D1;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px 20px 20px 20px;
`;

export const AgendView = styled.View`
    flex: 1;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 15px 30px;
    margin-bottom: 15px;
`;

export const AgendBarber = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const AgendBarberAvatar = styled.Image`
width: 50px;
height: 50px;
border-radius: 15px;
`;

export const AgendBarberName = styled.Text`
    margin-left: 20px;
    font-weight: bold;
    color: #000;
    font-size: 20px;
`;

export const AgendService = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
`;

export const AgendServiceType = styled.Text`
    color: #000;
    font-size: 16px;
    font-weight: 900;
`;

export const AgendSevicePrice = styled.Text`
    color: #000;
    font-size: 16px;
    font-weight: 900;
`;

export const AgendDate = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const AgendDateArea = styled.View`
    background-color: #63C2D1;
    padding: 5px 10px;
    border-radius: 8px;
`;

export const AgendDateText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
`;

export const AgendHoursArea = styled.View`
    background-color: #63C2D1;
    padding: 5px 10px;
    border-radius: 8px;
`;

export const AgendHoursText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: bold;`;




