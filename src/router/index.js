import React from 'react';
import { Stylesheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Splash, Akun, Pesanan} from '../pages';
import { BottomNavigator } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />} >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Pesanan" component={Pesanan} />
            <Tab.Screen name="Akun" component={Akun}  />
        </Tab.Navigator>
    )
}


const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown:false}}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown:false }} />
        </Stack.Navigator>
    )
}

export default Router;