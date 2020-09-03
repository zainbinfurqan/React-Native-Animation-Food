import React, { useContext } from 'react';
import { ExpensTrackerProvider } from '../ExpensTrackerProvider'
import ExpenseList from '../ExpensList'
import { View } from 'react-native';
import Header from '../Header'
import ExpenseInput from '../Input'
function ExpenseTracker(props) {


    return (
        <View style={{ flex: 1, }}>
            <Header />
            <ExpenseInput />
            <ExpenseList />
        </View>
    )
}

export default ExpenseTracker