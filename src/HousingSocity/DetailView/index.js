import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import Item from './Item'

function DetailView(props) {

    const [activeImage, setActiveImage] = useState(require('../assets/home1.jpg'))
    const [activeImageId, setActiveImageId] = useState(1)

    const data = [
        {
            id: 1,
            description: 'it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            title: 'Apartment',
            location: 'Usmania colony nazimabad no 1, karachi , pakistan',
            bedRoom: 2, bathRoom: 1, ratting: [1, 2, 3, 5], reviews: 2, rent: 10000, size: '1000 sq ft'
        },
    ]


    function makeActive(id, image) {
        setActiveImageId(id)
        setActiveImage(image)
    }

    return (
        <ScrollView style={{ flex: 1, }}>
            <View style={{ padding: 5, }}>
                <Image style={{ height: 250, width: '100%', overflow: 'hidden', borderRadius: 5, }}
                    resizeMode="contain"
                    source={activeImage} />
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
                        <TouchableOpacity style={[activeImageId == 1 && { borderWidth: 1 }]} onPress={() => makeActive(1, require('../assets/home1.jpg'))}>
                            <Image style={[{ height: 50, margin: 5, width: 50 }]} source={require('../assets/home1.jpg')} /></TouchableOpacity>
                        <TouchableOpacity style={[activeImageId == 2 && { borderWidth: 1 }]} onPress={() => makeActive(2, require('../assets/home2.jpg'))}>
                            <Image style={[{ height: 50, margin: 5, width: 50 }]} source={require('../assets/home2.jpg')} /></TouchableOpacity>
                        <TouchableOpacity style={[activeImageId == 3 && { borderWidth: 1 }]} onPress={() => makeActive(3, require('../assets/home3.jpg'))}>
                            <Image style={[{ height: 50, margin: 5, width: 50 }]} source={require('../assets/home3.jpg')} /></TouchableOpacity>
                        <TouchableOpacity style={[activeImageId == 4 && { borderWidth: 1 }]} onPress={() => makeActive(4, require('../assets/home4.jpg'))}>
                            <Image style={[{ height: 50, margin: 5, width: 50 }]} source={require('../assets/home4.jpg')} /></TouchableOpacity>
                        <TouchableOpacity style={[activeImageId == 5 && { borderWidth: 1 }]} onPress={() => makeActive(5, require('../assets/home5.jpg'))}>
                            <Image style={[{ height: 50, margin: 5, width: 50 }]} source={require('../assets/home5.jpg')} /></TouchableOpacity>
                        <TouchableOpacity style={[activeImageId == 6 && { borderWidth: 1 }]} onPress={() => makeActive(6, require('../assets/home6.jpg'))}>
                            <Image style={[{ height: 50, margin: 5, width: 50 }]} source={require('../assets/home6.jpg')} /></TouchableOpacity>
                        <TouchableOpacity style={[activeImageId == 7 && { borderWidth: 1 }]} onPress={() => makeActive(7, require('../assets/home7.jpg'))}>
                            <Image style={[{ height: 50, margin: 5, width: 50 }]} source={require('../assets/home7.jpg')} /></TouchableOpacity>
                        <TouchableOpacity style={[activeImageId == 8 && { borderWidth: 1 }]} onPress={() => makeActive(8, require('../assets/home8.jpg'))}>
                            <Image style={[{ height: 50, margin: 5, width: 50 }]} source={require('../assets/home8.jpg')} /></TouchableOpacity>
                    </ScrollView>
                </View>
                <Item text={data[0].bedRoom} extra='Bedrooms' icon={require('../assets/bed.png')} />
                <Item text={data[0].bathRoom} extra='Bathroom' icon={require('../assets/bath.png')} />
                <Item ratting={true} rattingArray={data[0].ratting} />
                <Item text={data[0].reviews} extra='Reviews' icon={require('../assets/review.png')} />
                <Item text={data[0].rent} icon={require('../assets/dollar.png')} />
                <Item text={data[0].size} icon={require('../assets/sqft.png')} />
                <Item text={data[0].location} icon={require('../assets/location.png')} last={true} />
                <View style={{
                    shadowColor: "#000",
                    padding: 10,
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    borderRadius: 5,
                    elevation: 2,
                }}>
                    <Text style={{ fontFamily: 'samsung_s_sharp', fontSize: 15 }}>Details</Text>
                    <Text style={{ fontFamily: 'samsung_s_sharp', }}> {data[0].description} </Text>
                </View>

            </View>
        </ScrollView >
    );
}

export default DetailView;