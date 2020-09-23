import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'


function FruitCard(props) {

    const [data, setData] = useState([
        { id: 1, title: 'Orange', price: '24.34', description: "Lorem Ipsum standard dummy text ever since the 1500s, when an unknown printer took a galley", rating: [1, 2, 3], image: require('../../../assets/images/orang.png'), },
        { id: 2, title: 'Cheery', price: '24.34', description: "Lorem Ipsum has been the industry's nknown printer took a galley", rating: [1, 2, 3, 4], image: require('../../../assets/images/cheery.png'), },
        { id: 3, title: 'Graphes', price: '24.34', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley", rating: [1, 2], image: require('../../../assets/images/grapes.png'), },
        { id: 4, title: 'Strawberry', price: '24.34', description: "Lorem Ipsue 1500s, when an unknown printer took a galley", rating: [1, 2, 3, 4, 5], image: require('../../../assets/images/streberry.png'), },
        { id: 5, title: 'Banana', price: '24.34', description: "Lorem Ipsum has been the industry's standard dumm00s, when an unknown printer took a galley", rating: [1, 2, 3,], image: require('../../../assets/images/banana.png'), },
        { id: 3, title: 'Graphes', price: '24.34', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley", rating: [1, 2], image: require('../../../assets/images/grapes.png'), },
        { id: 4, title: 'Strawberry', price: '24.34', description: "Lorem Ipsue 1500s, when an unknown printer took a galley", rating: [1, 2, 3, 4, 5], image: require('../../../assets/images/streberry.png'), },

    ])

    return (
        <ScrollView style={{ flex: 1 }}>
            {data.map((_, i) => {
                return (
                    <View key={i} style={{ margin: 5, flexDirection: 'row', borderColor: '#D6D8D8', borderBottomWidth: 0.45, padding: 5 }}>
                        <View style={{
                            flex: 0.25, borderWidth: 0.45, borderColor: '#E8CFF5',
                            backgroundColor: '#ECD9F6',
                            shadowColor: "#E8CFF5",
                            shadowOffset: {
                                width: 10,
                                height: 10,
                            },
                            shadowOpacity: 4.22,
                            shadowRadius: 4.00,

                            elevation: 6,
                            alignSelf: "center", borderRadius: 50, justifyContent: 'center', width: 120, height: 95, padding: 5,
                        }}>
                            <Image style={{ height: 70, alignSelf: 'center', width: 80, alignSelf: 'center' }} source={_.image} />
                        </View>
                        <View style={{ flex: 0.75, flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', paddingLeft: 5 }}>{_.title}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                {_.rating.map((__, ii) => {
                                    return (
                                        <Image key={ii} style={{ height: 15, width: 15 }} source={require('../../../assets/images/star.png')} />
                                    )
                                })}
                            </View>
                            <Text style={{ paddingLeft: 5 }}>{_.description}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{ paddingLeft: 5, fontWeight: 'bold' }}>{_.price} $</Text>
                                <View style={{
                                    height: 35, width: 35, borderRadius: 50, backgroundColor: '#B739FA',
                                    elevation: 4,
                                    justifyContent: 'center',
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowRadius: 1.00,
                                }}>
                                    <Image style={{ alignSelf: 'center', height: 20, width: 20 }} source={require('../../../assets/images/arrow.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })}

        </ScrollView>
    );
}

export default FruitCard;