import React, { useContext, useState } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';
import { ContextStore } from '../ExpensTrackerProvider'


function ExpenseInput(props) {

    const [expenseText, setExpenseText] = useState('')
    const [expenseDescription, setExpenseDescription] = useState('')
    const { addExpensive } = useContext(ContextStore)

    function onAddExpense() {
        addExpensive({ price: expenseText, description: expenseDescription })
        setExpenseText('')
        setExpenseDescription('')
    }

    return (
        <View style={styles.inputMain}>
            <TextInput
                placeholder='Amount'
                style={styles.input}
                onChangeText={(e) => setExpenseText(e)}
                value={expenseText} />
            <TextInput
                placeholder='Description'
                style={styles.input}
                onChangeText={(e) => setExpenseDescription(e)}
                value={expenseDescription} />
            <View style={styles.buttonMain}>
                <Button onPress={onAddExpense} title='Add' style={styles.button} />
            </View>
        </View>
    )
}

export default ExpenseInput

const styles = StyleSheet.create({
    inputMain: {
        padding: 5,
        justifyContent: 'space-around',
    },
    input: {
        marginBottom: 5,
        height: 35,
        borderWidth: 0.34,
    },
    buttonMain: {
        height: 35,
    },
    button: {
        borderWidth: 2,
        alignSelf: 'flex-end',
    }
});