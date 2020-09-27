import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Alert, FlatList, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
import Item from './Item'

function DetailShowPopup(props) {

    const [data, setData] = useState([
        { bedroom: '2 Bedrooms', bathRoom: "1 Bathroom", size: '24 sq ft', rent: 7000, ratting: '4.5' },
    ])

    return (
        <View style={{
            position: 'absolute', height: height,
            zIndex: 1,
            backgroundColor: 'rgba(52, 52, 52, 0.2)',
            flex: 1,
        }}>
            <View style={{
                borderRadius: 4,
                alignSelf: 'center',
                padding: 5,
                margin: 10,
                height: height - 40,
                backgroundColor: 'white'
            }}>
                <TouchableOpacity onPress={props.handleShowDetails} style={{
                    margin: 5,
                    alignSelf: 'flex-end',
                    backgroundColor: 'black',
                    height: 25,
                    width: 25,
                    justifyContent: 'center',
                    borderRadius: 50,

                }}>
                    <Text style={{ color: 'white', alignSelf: 'center', }}>X</Text>
                </TouchableOpacity>
                {/* <ScrollView style={{ paddingBottom: 20, borderWidth: 5 }}> */}
                <View style={{}}>
                    <Image resizeMode="contain" style={{
                        overflow: "hidden", borderRadius: 5, height: 240, width: '100%'
                    }} source={require('../assets/home1.jpg')} />
                </View>
                <Text style={{ fontSize: 20, fontFamily: 'SamsungSharpSans-Bold' }}>Basic info</Text>
                <Item text={data[0].bedroom} last={false} />
                <Item text={data[0].bathRoom} last={false} />
                <Item text={data[0].rent} last={false} />
                <Item text={data[0].size} last={false} />
                <Item text={data[0].ratting} last={true} />
                <Text style={{ fontFamily: 'SamsungSharpSans-Bold' }}>Details</Text>
                <ScrollView>
                    <Text style={{ fontFamily: 'samsung_s_sharp', fontSize: 12 }}>professor at   Hampden-Sydney  College in Virginia, looked up one of the
                    more obscure Latin words, consectetur,
                    from a Lorem Ipsum passage, and going through the cites of the word in classical
                    from a Lorem Ipsum passage, and going through the cites of the word in classical
                    from a Lorem Ipsum passage, and going through the cites of the word in classical
                    from a Lorem Ipsum passage, and going through the cites of the word in classical
                    from a Lorem Ipsum passage, and going through the cites of the word in classical
                    from a Lorem Ipsum passage, and going through the cites of the word in classical
                    Hampden-Sydney  College in Virginia,
                                    literature, discovered the undoubtable source.</Text>
                </ScrollView>
            </View>
        </View>
    );
}

export default DetailShowPopup;