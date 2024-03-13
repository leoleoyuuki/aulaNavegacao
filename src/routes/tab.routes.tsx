import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Login from '../screens/Login';

const {Screen, Navigator} = createBottomTabNavigator();

export default function StackRoutes(){
    return(
        <Navigator>
            <Screen
                name='(Home)'
                component={Home}
                options={{
                    title:'Tela de Inicio',
                    headerShown:false
                }}
            />
            <Screen
                name='(Login)'
                component={Login}
            />
        </Navigator>
    )
}