import React, { useContext } from 'react';
import { View, Dimensions } from 'react-native'
import { ContextStore } from '../ExpensTrackerProvider'

function ExpenseGraph(props) {
    const { expense } = useContext(ContextStore)

    return (
        <View style={{ borderWidth: 1 }}>

        </View>
    )
}

export default ExpenseGraph;