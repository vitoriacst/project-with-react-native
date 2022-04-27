import { SignIn } from "../screens/SignIn";
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { Home } from '../screens/Home';
import { theme } from "../global/styles/theme";

const{Navigator,Screen}=createNativeStackNavigator();

export  function AuthRoutes(){
    return(
        <Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: theme.colors.secondary100
          }
        }}
      >     
            <Screen name="Home" component={Home}/>
            <Screen name="SignIn" component={SignIn}/>
        </Navigator>
    )
}