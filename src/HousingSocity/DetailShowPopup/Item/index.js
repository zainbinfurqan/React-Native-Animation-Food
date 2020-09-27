import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Alert, FlatList, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'

function Item(props) {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: .2, flexDirection: 'column' }}>
                    <View style={{
                        height: 12,
                        borderColor: '#A09E9E',
                        width: 12, borderWidth: 0.34,
                        alignSelf: 'center', margin: 5, marginBottom: 0, borderRadius: 50
                    }}></View>
                    {!props.last && <View style={{
                        borderWidth: 0.34,
                        margin: 5,
                        borderColor: '#A09E9E',
                        alignSelf: 'center', height: 15, borderRadius: 1, borderStyle: 'dashed'
                    }}></View>}
                </View>
                <View style={{ flex: .8 }}>
                    <Text style={{ fontFamily: 'SamsungSharpSans-Bold' }}>{props.text}</Text>
                </View>
            </View>
        </View>
    );
}

export default Item;