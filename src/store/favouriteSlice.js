import {createSlice} from "@reduxjs/toolkit";
import {FAV} from "../utils/keyLS";


const initialState = {
    favourites: JSON.parse(localStorage.getItem(FAV) || '[]')
}

export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addFavourite(state, action) {
            state.favourites.push(action.payload)
        },
        removeFavourite(state, action) {
            state.favourites = state.favourites.filter(movie => movie.id !== action.payload.id)
        }
    }
})

export const { addFavourite, removeFavourite } = favouriteSlice.actions
export const favourite = favouriteSlice.reducer