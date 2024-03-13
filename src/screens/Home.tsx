import { Button, Text, View } from "react-native";
import React from "react";

export default ({navigation})=>{

    function irLogin(){
        navigation.navigate('(Login)')
    }

    return(
        <View>
            <Text>TELA HOME</Text>
            <Button title="IR PARA LOGIN" onPress={irLogin} />
        </View>
    )

}