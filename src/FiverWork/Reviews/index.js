import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'

function Review(props) {

    const [data, setData] = useState([
        { id: 1, name: 'Zain Ahmed', text: '', review: 2, date: '' },
        { id: 2, name: 'Zain Ahmed', text: '', review: 2, date: '' },
        { id: 3, name: 'Zain Ahmed', text: '', review: 2, date: '' },
        { id: 4, name: 'Zain Ahmed', text: '', review: 2, date: '' },
        { id: 5, name: 'Zain Ahmed', text: '', review: 2, date: '' },
        { id: 6, name: 'Zain Ahmed', text: '', review: 2, date: '' },
        { id: 7, name: 'Zain Ahmed', text: '', review: 2, date: '' },
        { id: 8, name: 'Zain Ahmed', text: '', review: 2, date: '' },
    ])

    return (
        <ScrollView style={{ borderWidth: 2, flex: 1 }}>
            {data.map((_, i) => {
                return (
                    <View style={{ borderWidth: 1 }}></View>
                )
            })}
        </ScrollView>
    );
}

export default Review;