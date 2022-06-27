import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './pages/home'
import Order from './pages/order'
// import Service from './pages/service'
// import TimeAndPlace from './pages/order/timeAndPlace'
const Stack = createStackNavigator()
const MainStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Order" component={Order} options={({ route }) => ({ title: route.params.shop })} />
                {/* <Stack.Screen name="TimeAndPlace" component={TimeAndPlace} options={({ route }) => ({ title: route.params.s_title, headerTintColor: '#000022' })} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack

const styles = StyleSheet.create({})