import React from 'react';
import { View, Linking, Platform, Text, TouchableOpacity } from 'react-native'
function DiLLingPad(props) {



    function openInPad() {
        let number = '';
        if (Platform.OS === 'ios') {
            number = 'telprompt:${03022408099}';
        }
        else {
            number = 'tel:${03022408099}';
        }
        Linking.openURL(number);
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity style={{ justifyContent: 'center', alignSelf: 'center' }} onPress={openInPad}>
                <Text>03022408099</Text>
            </TouchableOpacity>

        </View>
    );
}

export default DiLLingPad;