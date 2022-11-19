import {LSKey} from "../utils/keyLS";
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    history: JSON.parse(localStorage.getItem(LSKey('hist'))) || []
}
export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addHistory: (state, action) => {
            state.history.push(action.payload)
        }
    }
})

export const { addHistory } = historySlice.actions
export const history = historySlice.reducer