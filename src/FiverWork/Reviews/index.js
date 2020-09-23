import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'

function Review(props) {

    const [data, setData] = useState([
        { id: 1, name: 'Zain Ahmed', text: "Lorem  dummy text ever since the 1500s, when an unknown printer took a galley", review: [1, 2, 3], date: '12 Sep 2020', icon: require('../../../assets/images/p1.png') },
        { id: 2, name: 'Zain Ahmed', text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley", review: [1, 2], date: '15 Aug 2020', icon: require('../../../assets/images/p2.png') },
        { id: 3, name: 'Zain Ahmed', text: "Lorem Ipsum has  standard dummy text ever since the 1500s, when an unknown printer took a galley", review: [1, 2, 3], date: '25 June 2020', icon: require('../../../assets/images/p3.png') },
        { id: 4, name: 'Zain Ahmed', text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley", review: [1, 2, 3, 4, 5], date: '12 June 2020', icon: require('../../../assets/images/p4.png') },
        { id: 5, name: 'Zain Ahmed', text: "Lorem Ipsum has been the industry's standard dummy text ever , when an unknown printer took a galley", review: [1, 2, 3], date: '12 March 2020', icon: require('../../../assets/images/p3.png') },
        { id: 6, name: 'Zain Ahmed', text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley", review: [1, 2], date: '11 Jan 2020', icon: require('../../../assets/images/p6.png') },
        { id: 7, name: 'Zain Ahmed', text: "Lorem Ipsum has been the industry's  when an unknown printer took a galley", review: [1, 2, 3, 4, 5], date: '5 Jan 2020', icon: require('../../../assets/images/p7.png') },
        { id: 8, name: 'Zain Ahmed', text: "Lorem  printer took a galley", review: [1, 2], date: '12 Dec 2019', icon: require('../../../assets/images/p1.png') },
        { id: 5, name: 'Zain Ahmed', text: "Lorem Ipsum has been the industry's standard dummy text ever , when an unknown printer took a galley", review: [1, 2, 3], date: '12 March 2020', icon: require('../../../assets/images/p3.png') },
        { id: 6, name: 'Zain Ahmed', text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley", review: [1, 2], date: '11 Jan 2020', icon: require('../../../assets/images/p6.png') },
        { id: 7, name: 'Zain Ahmed', text: "Lorem Ipsum has been the industry's  when an unknown printer took a galley", review: [1, 2, 3, 4, 5], date: '5 Jan 2020', icon: require('../../../assets/images/p7.png') },

    ])

    return (
        <ScrollView style={{ flex: 1 }}>
            {data.map((_, i) => {
                return (
                    <View key={i} style={{ flexDirection: 'row', padding: 5, margin: 5, borderTopWidth: 0.34, borderBottomWidth: 0.34, borderColor: '#E3E7E7' }}>
                        <View style={{ flex: 0.15, justifyContent: 'center' }}>
                            <Image style={{ height: 35, width: 35, alignSelf: 'center' }} source={_.icon} />
                        </View>
                        <View style={{ flex: 0.85, flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: 'bold', }}>{_.name}</Text>
                                <Text style={{ fontWeight: 'bold', }}>{_.date}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                {_.review.map((__, ii) => {
                                    return (
                                        <Image key={ii} style={{ height: 10, width: 10 }} source={require('../../../assets/images/star.png')} />
                                    )
                                })}
                            </View>
                            <Text>{_.text}</Text>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    );
}

export default Review;