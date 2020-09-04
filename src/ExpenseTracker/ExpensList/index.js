import React, { useContext } from 'react';
import { ContextStore } from '../ExpensTrackerProvider'
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function ExpenseList(props) {
    const { expense } = useContext(ContextStore)
    return (
        <ScrollView style={styles.main}>
            <Text style={styles.input}>Transaction history</Text>
            {expense.map((_, i) => {
                return (
                    <View key={i} style={styles.cardMain}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.peiceText}>Amount: {_.price} </Text>
                            <Text style={{ fontFamily: 'samsung_s_sharp', alignSelf: 'center', fontSize: 15, }}>(PRK)</Text>
                        </View>
                        <View style={{ borderWidth: 0.34, padding: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.description}>Description: {_.description} </Text>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    )
}
export default ExpenseList

const styles = StyleSheet.create({
    main: { flex: 1 },
    input: { alignSelf: 'center', paddingLeft: 10, fontFamily: 'samsung_s_sharp', justifyContent: 'center', fontSize: 20 },
    cardMain: { borderWidth: 0.34, padding: 5, margin: 5, },
    peiceText: { fontFamily: 'samsung_s_sharp', justifyContent: 'center', fontSize: 15 },
    description: { fontFamily: 'samsung_s_sharp', justifyContent: 'center', fontSize: 15 },
});