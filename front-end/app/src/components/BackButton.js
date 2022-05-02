import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import BackIcon from "../assets/back.svg";

const BackButtom = styled.TouchableOpacity`
position: absolute;
left: 0;
top: 6px;
z-index: 9;
`;

export default ()=>{
    const navigation = useNavigation();
    const handleBackButtom = () => {
        navigation.goBack();
    }

    return (
        <BackButtom onPress={handleBackButtom}>
            <BackIcon width="44" height="44" fill="#FFFFFF" />
        </BackButtom>
    );

}