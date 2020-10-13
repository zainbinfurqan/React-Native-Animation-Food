import React, { useState, useReducer } from 'react';
import { View, FlatList, Text, TextInput, TouchableOpacity } from 'react-native'


const initialState = {
    cart: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'ON_ADD_TO_CART':
            return { ...state, cart: action.payload };
        default:
            return state;
    }
}

function AddToCart(props) {

    const [state, dispatch] = useReducer(reducer, initialState);

    const [data, setData] = useState([
        { id: 1, name: 'T-Shirt', },
        { id: 2, name: 'T-Shirt', },
        { id: 3, name: 'T-Shirt', },
        { id: 4, name: 'T-Shirt', },
        { id: 5, name: 'T-Shirt', },
        { id: 6, name: 'T-Shirt', },
        { id: 7, name: 'T-Shirt', },
    ])

    function AddToCart(item) {
        console.log("item=>", item)
        console.log("state.cart=>", state.cart)
        let isItem = state.cart.findIndex(items => items.id == item.id)
        console.log("isItem=>", isItem)
        let cart = state.cart
        // console.log(isItem)
        if (isItem === -1) {
            let newItem = item
            newItem.quantity = 1
            cart.push(newItem)
        } else {
            cart[isItem].quantity = cart[isItem].quantity + 1
        }
        console.log("cart=>", cart)
        dispatch({
            type: 'ON_ADD_TO_CART',
            payload: cart,
        });
        // item.quantity
        // 
        // console.log("a=>", a)
        // a.push(item)
        // console.log("=>a", a)
        // dispatch({
        //     type: 'ON_ADD_TO_CART',
        //     payload: a,
        // });

    }

    return (
        <View style={{ flex: 1, borderWidth: 4 }}>
            {console.log(state.cart)}
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <View style={{ borderWidth: 0.5, margin: 5, padding: 5, flexDirection: 'row' }}>
                        <View style={{ flex: .4 }}>
                            <View style={{ height: 100, width: '100%', backgroundColor: 'red' }}>

                            </View>
                        </View>
                        <View style={{ flex: .6, justifyContent: 'center', }}>
                            <TouchableOpacity onPress={() => AddToCart(item)} style={{ height: 40, justifyContent: 'center', borderWidth: 0.25, borderRadius: 5, alignSelf: 'center', padding: 5 }}>
                                <Text style={{ fontWeight: 'bold', alignSelf: "center" }}>Add to cart</Text>
                            </TouchableOpacity>
                            <Text>{item.quantity ? item.quantity : 0}</Text>
                        </View>
                    </View>
                )}
            />

        </View>
    );
}

export default AddToCart;