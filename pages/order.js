import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import shopData from '../data/shopData'
// import ShopCard from '../components/home/shopCard'
const Order = ({ route, navigation }) => {
    const shop = shopData.find((x) => x.name == route.params.shop)
    const item = shop.menu.find(x => x._id == route.params.item)
    const [cartItems, setCartItems] = useState([item])
    var total_items = 1
    const onClick = (id) => {
        var objFound_bool = false;
        var cart = cartItems
        for (var i = 0; i < cart.length; i++) {
            if (id === cart[i]._id) {
                objFound_bool = true;
                cart[i].quantity ? cart[i].quantity += 1 : cart[i].quantity = 2;
                setCartItems([...cart])
            }
        }
        if (!objFound_bool) {
            setCartItems([...cart, shop.menu.find(x => x._id == id)])
        }
    }
    return (
        <>
            <View style={styles.container}>
                <Text style={{ fontSize: 30, fontWeight: '300' }}>Order Items</Text>
                <View style={styles.itemContainer}>
                    {cartItems.map((data, index) => {
                        return (
                            <View key={index} style={styles.cartItem}>
                                <Text>{data.name}</Text>
                                <View style={styles.cartActions}>
                                    <TouchableOpacity style={styles.cartAddBtn} ><Text>+</Text></TouchableOpacity>
                                    {data.quantity ? <Text>{data.quantity}</Text> : <Text>1</Text>}
                                    <TouchableOpacity style={styles.cartRemoveBtn}><Text>-</Text></TouchableOpacity>
                                </View>
                                <Text>{data.price}</Text>
                                {!data.available && <Text>Not Available Currently</Text>}
                            </View>
                        )
                    })}
                </View>
                {
                    shop.menu.map((data, index) => {
                        if (data._id == route.params.item) {
                            return
                        }
                        return (
                            <TouchableOpacity activeOpacity={0.6} key={index} style={styles.serviceContainer} onPress={() => onClick(data._id)}>
                                <View style={styles.serviceImg}></View>
                                <View style={styles.service}>
                                    <Text>{data.name}</Text>
                                    <Text style={styles.servicePrice}>{data.price}</Text>
                                </View>
                                {/* <Text style={styles.servicePrice}>{data.name}</Text> */}
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <TouchableOpacity style={{ width: '100%', backgroundColor: 'orange', height: 60, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 24 }}>
                    Place Order
                </Text>
            </TouchableOpacity>
        </>
    )
}

export default Order

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    itemContainer: {
        borderWidth: 1,
        borderRadius: 20,
        // minHeight: 100,
        padding: 10
    },
    serviceContainer: {
        // justifyContent: 'center',
        // borderWidth: 1,
        borderRadius: 30,
        flexDirection: 'row',
        width: '100%',
        marginVertical: 5,
        padding: 3,
        alignItems: 'center',
        backgroundColor: "#f1f1f1",
    },
    serviceImg: {
        width: 40,
        height: 40,
        // borderRadius: 50,
        margin: 8,
        backgroundColor: '#ccc',
        // borderWidth: 1,
        borderRadius: 20
    },
    service: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    servicePrice: {
        // color: "#aaa",
        fontWeight: 'bold',
        marginHorizontal: 10,
        fontSize: 15
        // float: 'right'
    }
})