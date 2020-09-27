import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import Item from './Item'

function DetailView(props) {

    const data = [
        {
            id: 1,
            description: 'it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            title: 'Apartment',
            location: 'Usmania colony nazimabad no 1, karachi , pakistan',
            bedRoom: 2, bathRoom: 1, ratting: [1, 2, 3, 5], reviews: 2, rent: 10000, size: '1000 sq ft'
        },
    ]

    return (
        <ScrollView style={{ flex: 1, }}>
            <View style={{ padding: 5, }}>
                <Image style={{ height: 250, width: '100%' }} resizeMode="contain" source={require('../assets/home2.jpg')} />
            </View>
            <View style={{
                flex: 1,
                borderWidth: .45, backgroundColor: 'white', borderTopLeftRadius: 25,
                borderTopRightRadius: 25, padding: 10,
                borderColor: '#A09E9E',
            }}>
                <View style={{
                    borderWidth: 0.34, width: 50,
                    borderColor: '#A09E9E',
                    alignSelf: 'center', height: 3, borderRadius: 2, backgroundColor: '#A09E9E'
                }}></View>
                <View style={{ marginTop: 5 }}>
                    <ScrollView style={{ padding: 5 }} showsHorizontalScrollIndicator={false} horizontal={true}>
                        <Image style={{ height: 50, margin: 5, width: 50 }} source={require('../assets/home1.jpg')} />
                        <Image style={{ height: 50, margin: 5, width: 50 }} source={require('../assets/home2.jpg')} />
                        <Image style={{ height: 50, margin: 5, width: 50 }} source={require('../assets/home3.jpg')} />
                        <Image style={{ height: 50, margin: 5, width: 50 }} source={require('../assets/home4.jpg')} />
                        <Image style={{ height: 50, margin: 5, width: 50 }} source={require('../assets/home5.jpg')} />
                        <Image style={{ height: 50, margin: 5, width: 50 }} source={require('../assets/home6.jpg')} />
                        <Image style={{ height: 50, margin: 5, width: 50 }} source={require('../assets/home7.jpg')} />
                        <Image style={{ height: 50, margin: 5, width: 50 }} source={require('../assets/home8.jpg')} />
                    </ScrollView>
                </View>
                <Item text={data[0].bedRoom} extra='Bedrooms' icon={require('../assets/bed.png')} />
                <Item text={data[0].bathRoom} extra='Bathroom' icon={require('../assets/bath.png')} />
                <Item ratting={true} rattingArray={data[0].ratting} />
                <Item text={data[0].reviews} extra='Reviews' />
                <Item text={data[0].rent} icon={require('../assets/dollar.png')} />
                <Item text={data[0].size} icon={require('../assets/sqft.png')} />
                <Item text={data[0].location} icon={require('../assets/location.png')} last={true} />
                <View style={{ borderWidth: 0.45, padding: 5, marginTop: 5, borderRadius: 5 }}>
                    <Text style={{ fontFamily: 'samsung_s_sharp', fontSize: 15 }}>Details</Text>
                    <Text style={{ fontFamily: 'samsung_s_sharp', }}> {data[0].description} </Text>
                </View>

            </View>
        </ScrollView >
    );
}

export default DetailView;