import React from "react";
import{RectButton} from 'react-native-gesture-handler'
import {Text,Image,View,TouchableOpacity,TouchableOpacityProps} from  'react-native'

import DiscordImg from '../../assets/discord.png';
import { styles } from "./styles";

type Props =  TouchableOpacityProps & {
    title: string;
}
export function ButtonIcon({title, ...rest}:Props){
    return(
        <TouchableOpacity 
        style={styles.container}
        {...rest}
         >
        <View style={styles.iconWrapper}/>
        <Image source={DiscordImg} style={styles.icon}/>
        <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>

    )
}