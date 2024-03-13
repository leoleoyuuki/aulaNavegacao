import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Login from '../screens/Login';


const {Screen, Navigator} = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Navigator
        screenOptions={{
            headerStyle: {backgroundColor: 'blue'}
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