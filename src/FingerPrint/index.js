import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { setCredentials, getCredentials } from './keychainService'
import { checkBiometricSupportednEnrolled } from './biomatricServices'

function FingerPrint(props) {

    useEffect(() => {
        async function componentDid() {
            let credentials = await getCredentials();
            console.log(credentials)
            if (credentials && credentials.username) {
                let isFingerPrintSupported = await checkBiometricSupportednEnrolled();
                console.log(isFingerPrintSupported)
            } else {
                // else don’t show fingerprint option on login
            }
        }
        componentDid()
    }, [])

    return (
        <View style={{ flex: 1, borderWidth: 2 }}>

        </View>
    );
}

export default FingerPrint;