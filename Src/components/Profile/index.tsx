import React from "react";
import { View ,Text} from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile(){
    return(
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/vitoriacst.png"/>
            <View>
                <View style={styles.user}>
                <Text style={styles.greeting}>ola,</Text>
                <Text style={styles.username}>Vivi</Text>
            </View>
                <Text style={styles.mensage}>Hoje e dia de vitoria</Text>
            </View>
        </View>
    )
}