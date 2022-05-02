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

export const SearchArea = styled.View`
    background-color: #4EADBE;
    height: 40px;
    border-radius: 20px;
    margin-bottom: 30px;
    width: 91%;
    left: 8%;

`;

export const SearchInput = styled.TextInput`
    flex: 1;
    font-size: 14px;
    color: #FFFFFF;
    margin-left: 20px;
`;

export const ResultArea = styled.View``;

export const LoadingIcon = styled.ActivityIndicator`
        margin-top: 200px;
`;