import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/Home';
import Login from '../screens/Login';

const {Screen, Navigator} = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Navigator
        screenOptions={{
            headerStyle: {backgroundColor: 'green'}
        }}
        >
            <Screen
                name='Home'
                component={Home}
                options={{
                    title: 'Tela Inicial',
                    headerShown: false
                }}
            />
            <Screen
                name='Login'
                component={Login}
            />
        </Navigator>
    )
}