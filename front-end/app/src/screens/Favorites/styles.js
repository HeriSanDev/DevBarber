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

export const ResultArea = styled.View``;

export const LoadingIcon = styled.ActivityIndicator`
        margin-top: 200px;
`;