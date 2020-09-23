import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'

function Notification(props) {

    const [data, setData] = useState([
        {
            id: 1, title: 'Sports Alert',
            icon: require('../../../assets/images/star.png'),
            description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", date: '12 Aug 2020'
        },
        {
            id: 4, title: 'Project Pendding',
            icon: require('../../../assets/images/lighting.png'),
            description: "s simply duming industry. Lorem Ipsum has been the industry's standard dummy", date: '12 Aug 2020'
        },
        {
            id: 3, title: 'Recharge Alert',
            icon: require('../../../assets/images/react.png'),
            description: "s simply dummy text of the pg industry. Lorem Ipsum has been the industry's standard dummy", date: '05 July 2020'
        },
        {
            id: 2, title: 'Portfolio Accomplished',
            icon: require('../../../assets/images/lighting.png'),
            description: "s Ipsum has been the industry's standard dummy", date: '01 June 2020'
        },
        {
            id: 5, title: 'Running time',
            icon: require('../../../assets/images/star.png'),
            description: "s simply dg industry. Lorem Ipsum has been the industry's standard dummy", date: '19 May 2020'
        },
        {
            id: 7, title: 'Project Accepted',
            icon: require('../../../assets/images/react.png'),
            description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", date: '13 Jan 2020'
        },
        {
            id: 6, title: 'Admin ',
            icon: require('../../../assets/images/star.png'),
            description: "s simply dummy text of the printing anindustry. Lorem Ipsum has been the industry's standard dummy", date: '23 Dec 2019'
        },
        {
            id: 7, title: 'Admin ',
            icon: require('../../../assets/images/lighting.png'),
            description: "s simply dummy text of the printing anindustry. Lorem Ipsum has been the industry's  text of the printing anindustry. Lorem Ipsum has been the industry's  standard dummy", date: '23 Dec 2019'
        },
        {
            id: 8, title: 'Admin ',
            icon: require('../../../assets/images/react.png'),
            description: "s simply dummy text of the printing anindustry. Lorem Ipsum has been the industry's standard dummy", date: '23 Dec 2019'
        },
    ])

    return (
        <ScrollView style={{ flex: 1, }}>
            {data.map((_, i) => {
                return (
                    <View key={i} style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 1.22,
                        shadowRadius: 1.00,

                        elevation: 1,
                        flexDirection: 'column', padding: 5, margin: 5, borderRadius: 3, borderColor: '#E3E7E7'
                    }}>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <View style={{ flex: 0.1, justifyContent: 'center', }}>
                                <Image style={{ height: 15, width: 15, alignSelf: 'center' }} source={_.icon} />
                                {/* <View style={{ alignSelf: 'center', backgroundColor: 'green', height: 10, width: 10, borderRadius: 50, }}></View> */}
                            </View>
                            <View style={{ flex: 0.7, flexDirection: 'row', }}>
                                <Text style={{ fontWeight: "bold" }}>{_.title}</Text>
                                <Image style={{ alignSelf: "center", marginLeft: 5, height: 15, width: 15 }} source={require('../../../assets/images/edit.png')} />
                            </View>
                            <View style={{ flex: 0.2, }}>
                                <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{_.date}</Text>
                            </View>
                        </View>
                        <View style={{ padding: 5, paddingLeft: 15 }}>
                            <Text>{_.description}</Text>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    );
}

export default Notification;