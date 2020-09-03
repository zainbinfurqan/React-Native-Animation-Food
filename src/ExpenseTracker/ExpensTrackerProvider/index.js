
import React, { createContext, useState, useReducer } from "react";
import ExpenseReducer from '../ExpenseReducer'

const initializeState = []

export const ContextStore = createContext(initializeState);

export const ExpensTrackerProvider = (props) => {

    const [expense, setExpense] = useState([])
    const [state, dispatch] = useReducer(ExpenseReducer, initializeState)


    function addExpensive(data) {
        dispatch({
            type: 'ADD_EXPENSIVE',
            payload: { ...data }
        })
    }

    return (
        <ContextStore.Provider
            // value={[expense, setExpense]}>
            value={{
                expense: state, addExpensive
            }}>
            {props.children}
        </ContextStore.Provider>
    )
}
