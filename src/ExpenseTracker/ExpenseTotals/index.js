import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { ContextStore } from '../ExpensTrackerProvider'


function ExpenseTotals(props) {
    const { expense } = useContext(ContextStore)
    let income = 0;
    let outgone = 0;
    let total = 0;
    expense.filter(items => {
        if (Math.sign(parseInt(items.price)) >= 0) {
            income = income + parseInt(items.price)
        }
    })
    expense.filter(items => {
        if (Math.sign(parseInt(items.price)) < 0) {
            outgone = outgone + parseInt(items.price)
        }
    })
    total = income + outgone
    return (
        <>
            <Text style={styles.totalText}>Total in account: {total}</Text>
            <View style={styles.main}>
                <View style={styles.expenseMain}>
                    <Text style={styles.expenseHeading}>Expense</Text>
                    <Text style={styles.expenseText}>{outgone}</Text>
                </View>
                <View style={styles.incomeMain}>
                    <Text style={styles.incomeHeading}>Income</Text>
                    <Text style={styles.incomeText}>{income}</Text>
                </View>
            </View>
        </>
    )
}

export default ExpenseTotals


const styles = StyleSheet.create({
    totalText: { fontFamily: 'samsung_s_sharp', alignSelf: 'center' },
    main: { flexDirection: 'row', padding: 5 },
    expenseMain: { borderColor: 'red', borderWidth: 0.34, flex: .50, height: 50, margin: 5, justifyContent: 'center' },
    expenseHeading: { fontFamily: 'samsung_s_sharp', alignSelf: 'center' },
    expenseText: { color: 'red', fontFamily: 'samsung_s_sharp', alignSelf: 'center' },
    incomeMain: { borderColor: 'green', borderWidth: 0.34, flex: .50, height: 50, margin: 5, justifyContent: 'center' },
    incomeHeading: { fontFamily: 'samsung_s_sharp', alignSelf: 'center' },
    incomeText: { color: 'green', fontFamily: 'samsung_s_sharp', alignSelf: 'center' },
});