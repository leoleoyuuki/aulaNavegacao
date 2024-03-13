import { Button, Text, View } from "react-native";

export default ({navigation})=>{

    function irLogin(){
        navigation.navigate('Login')
    }

    return(
        <View>
            <Text>TELA HOME</Text>
            <Button onPress={irLogin} title="IR PARA LOGIN" />
        </View>
    )

}