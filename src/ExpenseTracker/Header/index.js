import React, { } from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Header(props) {
    return (
        <View style={styles.Header}>
            <Text style={styles.text}>Expense Tracker</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    Header: {
        height: 50,
        backgroundColor: '#0A4868',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'robot',
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    }

});