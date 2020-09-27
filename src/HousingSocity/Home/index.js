import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Alert, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import DetailShowPopup from '../DetailShowPopup'

function Home(props) {
    const data = [
        { id: 1, title: '', bedRooms: 2, image: require('../assets/home1.jpg') },
        { id: 2, title: '', bedRooms: 3, image: require('../assets/home2.jpg') },
        { id: 3, title: '', bedRooms: 4, image: require('../assets/home3.jpg') },
        { id: 4, title: '', bedRooms: 2, image: require('../assets/home4.jpg') },
        { id: 5, title: '', bedRooms: 4, image: require('../assets/home5.jpg') },
        { id: 6, title: '', bedRooms: 3, image: require('../assets/home6.jpg') },
        { id: 7, title: '', bedRooms: 5, image: require('../assets/home7.jpg') },
        { id: 8, title: '', bedRooms: 3, image: require('../assets/home8.jpg') },
    ];
    const [detailShow, setDetalShow] = useState(false)
    const [detailShowView, setDetalShowView] = useState(false)

    function handleShowDetails() {
        setDetalShow(!detailShow)
    }

    function handleShowDetailsView() {
        setDetalShowView(!detailShowView)
    }

    return (
        <SafeAreaView style={{ flex: 1, zIndex: 0 }}>
            {detailShow && <DetailShowPopup handleShowDetails={handleShowDetails} />}
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <View style={{
                        justifyContent: 'center',
                        width: '50%',
                        padding: 5
                    }}>
                        <TouchableOpacity onPress={handleShowDetailsView} onLongPress={handleShowDetails} activeOpacity={0.9}>
                            <ImageBackground source={item.image}
                                style={[
                                    {
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 1,
                                        },
                                        shadowOpacity: 0.22,
                                        shadowRadius: 2.22,

                                        elevation: 3,
                                        margin: 2, height: 160, opacity: 0.8, overflow: "hidden", borderRadius: 5,
                                    },
                                ]}>
                                <View style={{ justifyContent: 'center', height: 160, backgroundColor: 'rgba(52, 52, 52, 0.4)' }}>
                                    <Text style={{
                                        color: 'white',
                                        alignSelf: 'center', fontSize: 20, fontFamily: 'SamsungSharpSans-Bold'
                                    }}>{item.bedRooms} Bedrooms</Text>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                }
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
            />
            {/* {data.map((_, i) => {
                return (
                )
            })} */}
        </SafeAreaView>
    );
}

export default Home;