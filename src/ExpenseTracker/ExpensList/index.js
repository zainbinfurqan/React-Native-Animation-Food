import React, { useContext } from 'react';
import { ContextStore } from '../ExpensTrackerProvider'
import { View, Text } from 'react-native';

function ExpenseList(props) {
    const { expense } = useContext(ContextStore)
    console.log("expense=>", expense)
    let total = 0;
    expense.filter(items => { total = total + parseInt(items.price) })
    // expense.filter(items => console.log(parseInt(items.price)))
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: 'center', paddingLeft: 10, fontFamily: 'YellowrabbitPersonaluse-qZYyd', justifyContent: 'center', fontSize: 35 }}>Transaction history</Text>
            <Text style={{ paddingLeft: 10, fontFamily: 'YellowrabbitPersonaluse-qZYyd', justifyContent: 'center', fontSize: 25 }}>Total: {total}</Text>
            {expense.map((_, i) => {
                return (
                    <View key={i} style={{ borderWidth: 1, padding: 5, margin: 5, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontFamily: 'YellowrabbitPersonaluse-qZYyd', justifyContent: 'center', fontSize: 25 }}>Amount: {_.price} </Text>
                            <Text style={{ fontFamily: 'YellowrabbitPersonaluse-qZYyd', alignSelf: 'center', fontSize: 15, }}>(PRK)</Text>
                        </View>
                        <View style={{ borderWidth: 1, padding: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={{ fontFamily: 'YellowrabbitPersonaluse-qZYyd', justifyContent: 'center', fontSize: 25 }}>Description: {_.description} </Text>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}
export default ExpenseList