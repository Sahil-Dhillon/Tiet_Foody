import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
    return (
        <View style={styles.container}>
            {/* <Text>This app was made by our team.</Text> */}
            <Text style={{ marginHorizontal: 10, paddingHorizontal: 8, fontSize: 18, fontWeight: 'bold' }}>Team Members: </Text>
            <View style={{ backgroundColor: '#fff', margin: 10, padding: 8, marginBottom: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Sahil Dhillon</Text>
                <Text>102003337</Text>
            </View>
            <View style={{ backgroundColor: '#fff', margin: 10, marginBottom: 0, padding: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Abhishek Gandhi</Text>
                <Text>102003364</Text>
            </View>
            <View style={{ backgroundColor: '#fff', margin: 10, padding: 8, marginBottom: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Bhavya Marwah</Text>
                <Text>102003351</Text>
            </View>
            <View style={{ backgroundColor: '#fff', margin: 10, padding: 8, marginBottom: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Naman Bhayana</Text>
                <Text>102003356</Text>
            </View>
            <View style={{ backgroundColor: '#fff', margin: 10, padding: 8, marginBottom: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Siddhi Aggarwal</Text>
                <Text>102003359</Text>
            </View>
            <View style={{ backgroundColor: '#fff', margin: 10, padding: 8, marginBottom: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Nupur Tyagi</Text>
                <Text>102003343</Text>
            </View>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eaffd3',
        flex: 1,
        padding: 10
    }
})