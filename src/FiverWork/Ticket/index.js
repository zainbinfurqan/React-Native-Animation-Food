import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'

function Ticket(props) {

    const [data, setData] = useState([
        { id: 1, cenima: 'Atriume', screen: 2, theater: 4, seat: "B 23", timming: '', date: '15 Sep 2020', name: 'Zain Ahmed' },
        { id: 2, cenima: 'Atriume', screen: 2, theater: 1, seat: "B 23", timming: '', date: '15 Sep 2020', name: 'Zain Ahmed' },
        { id: 3, cenima: 'Neuplex', screen: 4, theater: 2, seat: "B 23", timming: '', date: '15 Sep 2020', name: 'Zain Ahmed' },
        { id: 4, cenima: 'Neuplex', screen: 5, theater: 4, seat: "B 23", timming: '', date: '15 Sep 2020', name: 'Zain Ahmed' },
        { id: 5, cenima: 'Cinepax', screen: 1, theater: 5, seat: "B 23", timming: '', date: '15 Sep 2020', name: 'Zain Ahmed' },
        { id: 6, cenima: 'Cinepax', screen: 3, theater: 4, seat: "B 23", timming: '', date: '15 Sep 2020', name: 'Zain Ahmed' },
        { id: 7, cenima: 'Neuplex', screen: 2, theater: 3, seat: "B 23", timming: '', date: '15 Sep 2020', name: 'Zain Ahmed' },
        { id: 8, cenima: 'Neuplex', screen: 5, theater: 6, seat: "B 23", timming: '', date: '15 Sep 2020', name: 'Zain Ahmed' },
    ])

    return (
        <ScrollView style={{ flex: 1, borderWidth: 1, }}>
            {data.map((_, i) => {
                return (
                    <View key={i} style={{ borderWidth: 1, margin: 5, borderStyle: 'dashed', borderRadius: 5, flexDirection: 'column' }}>
                        <View style={{ borderWidth: 1, padding: 5, backgroundColor: 'black', justifyContent: "space-between", flexDirection: 'row' }}>
                            <Text style={{ alignSelf: 'center', fontWeight: 'bold', color: 'white' }}>Ticket</Text>
                            <Text style={{ alignSelf: 'center', fontWeight: 'bold', color: 'white' }}>{_.cenima}</Text>
                        </View>
                        <View style={{ borderBottomWidth: 0.34, borderColor: '#EAEAEA' }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>{_.name}</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>{_.date}</Text>
                            </View>
                        </View>
                        <View style={{ padding: 5, flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold' }}> Theater </Text><Text >{_.theater}</Text><Text> / </Text><Text style={{ fontWeight: 'bold' }}>Screen </Text><Text>{_.screen}</Text>
                        </View>
                        <View style={{ justifyContent: 'center', padding: 5, }}>
                            <Image style={{ alignSelf: 'center', height: 40, width: '90%' }} source={require('../../../assets/images/barcode.png')} />
                        </View>
                        <View style={{ padding: 5, flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold' }}> Name </Text><Text >{_.name}</Text><Text> / </Text><Text style={{ fontWeight: 'bold' }}> Seat </Text><Text>{_.seat}</Text>
                        </View>
                    </View>
                )
            })}
        </ScrollView >
    );
}

export default Ticket;