import React from "react";

import { View } from "react-native";
import { ButtonAdd } from "../../components/ButtonAdd";

import { Profile } from "../../components/Profile";

import { styles } from "./style";

export function Home(){
    return(
        <View>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd/>
                <View>
                </View>
            </View>
        </View>
    );
}