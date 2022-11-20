import {createSlice} from "@reduxjs/toolkit";

const initialState =  JSON.parse(localStorage.getItem('currUser')) || {
    email: null,
    id: null,
    token: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            localStorage.setItem('currUser', JSON.stringify(state))
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            localStorage.setItem('currUser', JSON.stringify(state))
        },
    }
})

export const {setUser, removeUser} = userSlice.actions
export const user = userSlice.reducer