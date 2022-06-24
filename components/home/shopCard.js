import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import IconFa5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';


const ShopCard = ({ _id, name, open, menu, rating }) => {
    const navigation = useNavigation();
    const onService = () => {
        navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.titleText}>{name}</Text>
                <IconFa5 name='arrow-right' color='#0094c6' size={16} />
            </View>
            <View style={styles.middleGrid}>
                {
                    menu.map((data, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.serviceContainer} onPress={onService}>
                                <View style={styles.service}></View>
                                <Text>{data.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            {
                // options.length > 3 && !expanded ? <Icon name='expand-more' size={30} onPress={expandCard} /> : options.length > 3 &&
                //     expanded && <Icon name='expand-less' onPress={expandCard} size={30} />
                // options.length > 3 && <Icon name='expand-less' onPress={expandCard} size={30} style={{
                //     // transform: [{ rotate: `${deg}deg` }]
                // }} />
            }
            {/* <View style={styles.bottomBar}>
                {details.map((data, index) => {
                    return (
                        <Text key={index} style={styles.pills}>
                            {data}
                        </Text>
                    )
                })}
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        maxWidth: '100%',
        margin: 10,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 20,
        // margin: 1

    },
    topBar: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 15,
        padding: 10,
        // borderBottomWidth: 1

    },
    bottomBar: {
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    pills: {
        margin: 8,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff'
    },
    middleGrid: {
        margin: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    serviceContainer: {
        // justifyContent: 'center',
        // borderWidth: 1,
        maxWidth: 60,
        margin: 10,
        alignItems: 'center'
    },
    service: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#ccc'
    }
})

export default ShopCard
