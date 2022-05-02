import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { LogBox } from 'react-native';

import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
 export default () =>{
   return(
    <UserContextProvider>
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    </UserContextProvider>
   );
 }