import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './pages/home'
import Order from './pages/order'
import OrderConf from './pages/orderConf'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import About from './pages/about'
// import Service from './pages/service'
// import TimeAndPlace from './pages/order/timeAndPlace'
const Stack = createStackNavigator()
const MainStack = () => {
    const navigation = useNavigation();
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Order" component={Order} options={({ route }) => ({ title: route.params.shop })} />
                <Stack.Screen name="About Us" component={About} />
                <Stack.Screen name="Order Confirmation" component={OrderConf} options={({ route }) => ({
                    title: route.params.shop,
                })} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack

const styles = StyleSheet.create({})