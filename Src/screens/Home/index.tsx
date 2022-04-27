import React from "react";

import { View } from "react-native";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";

import { Profile } from "../../components/Profile";

import { styles } from "./style";

export function Home(){
    return(
        <View>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd/>
                <View>
                    <CategorySelect />
                </View>
            </View>
        </View>
    );
}