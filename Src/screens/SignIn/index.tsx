import React from "react";
import { View, Text , Image} from "react-native";
import IllustrationImg from '../../assets/illustration.png';
import { Styles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";


export function SignIn(){
  const navigation =  useNavigation()
  //funcao que cuida da interacao com o botao || criando as rotas

  function handleSignIn(){
   navigation.navigate('Home');
  }

  return(
    <View style={Styles.container}>
      <Image source={IllustrationImg}
      style={Styles.image}
      resizeMode="stretch"
      />
      <View style={Styles.content}>
        <Text style={Styles.title}>
           Conecte-se e {'\n'}
           e organize {'\n'}
            suas jogatinas{'\n'}
        </Text>
        <Text style={Styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>
      <ButtonIcon 
      title="Entrar com Discord"
      activeOpacity={0.7}
      onPress={handleSignIn}
      />
      </View>
    </View>
  )
}