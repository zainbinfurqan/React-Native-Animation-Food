import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

function Feed(props) {

    const [data, setData] = useState([
        { id: 1, title: 'T-shirt', description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", price: 100, image: require('../../../assets/images/1.jpg') },
        { id: 2, title: 'T-shirt', description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", price: 100, image: require('../../../assets/images/2.jpg') },
        { id: 3, title: 'T-shirt', description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", price: 100, image: require('../../../assets/images/3.jpg') },
        { id: 4, title: 'T-shirt', description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", price: 100, image: require('../../../assets/images/4.jpg') },
        { id: 5, title: 'T-shirt', description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", price: 100, image: require('../../../assets/images/5.jpg') },
        { id: 6, title: 'T-shirt', description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", price: 100, image: require('../../../assets/images/1.jpg') },
        { id: 7, title: 'T-shirt', description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", price: 100, image: require('../../../assets/images/2.jpg') },
        { id: 4, title: 'T-shirt', description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", price: 100, image: require('../../../assets/images/4.jpg') },
        { id: 5, title: 'T-shirt', description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", price: 100, image: require('../../../assets/images/5.jpg') },

    ])
    return (
        <ScrollView style={{ flex: 1 }}>
            {data.map((_, i) => {
                return (
                    <View style={{ flexDirection: 'row', borderBottomWidth: 0.34, borderColor: '#E3E7E7', padding: 5, margin: 2 }}>
                        <View style={{ flex: 0.3, height: 110 }}>
                            <Image style={{ height: '100%', width: '100%' }} source={_.image} />
                        </View>
                        <View style={{ flex: 0.7, padding: 5, flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontWeight: 'bold', flex: 0.8 }}>{_.title}</Text>
                                <View style={{ flex: 0.2, justifyContent: 'flex-end' }}>
                                    <Image style={{ width: 25, height: 25, alignSelf: 'flex-end' }} source={require('../../../assets/images/heart.png')} />
                                </View>
                            </View>
                            <Text>{_.description}</Text>
                            <View style={{
                                backgroundColor: '#F1AC42',
                                elevation: 2,
                                alignSelf: 'flex-end', height: 30, width: 30, justifyContent: 'center', borderRadius: 20,
                            }}>
                                <Image style={{ height: 38, alignSelf: 'center', width: 38 }} source={require('../../../assets/images/plus.png')} />
                            </View>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    );
}

export default Feed;