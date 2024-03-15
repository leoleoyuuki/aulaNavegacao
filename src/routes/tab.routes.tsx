import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Login from '../screens/Login';
import { Ionicons } from '@expo/vector-icons';


const {Screen, Navigator} = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Navigator screenOptions={
            {
                tabBarActiveTintColor: '#00aeff',
                tabBarInactiveTintColor: '#636363',
                tabBarStyle:{
                    backgroundColor: '#ffffff',
                    borderTopWidth: 0,
                },
            }
        } >
            <Screen
                name='(Home)'
                component={Home}
                options={{
                    title:'Tela de Inicio',
                    headerShown:true,
                    tabBarLabel:'Home',
                    tabBarIcon:({color, size}) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Screen
                name='(Login)'
                component={Login}
                options={{
                    title:'Tela de Login',
                    headerShown:true,
                    tabBarLabel:'Login',
                    tabBarIcon:({color, size}) => (
                        <Ionicons name="log-in" color={color} size={size} />
                    ),
                }}
            />
            
        </Navigator>
    )
}