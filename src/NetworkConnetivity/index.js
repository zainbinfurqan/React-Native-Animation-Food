import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native'
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

function NetworkConnectivity(props) {

    const [isNetworkConnect, setIsNetworkConnect] = useState(false)
    useEffect(() => {
        checkoutNetwork()
    })

    function checkoutNetwork() {
        NetInfo.fetch().then(state => {
            setIsNetworkConnect(state.isConnected)
        });
    }



    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            {!isNetworkConnect &&
                <View style={{}}>
                    <Image style={{ height: 100, width: 100, alignSelf: 'center' }} source={require('../assets/nointernet.png')} />
                </View>
            }

        </View>
    )
}
export default NetworkConnectivity;