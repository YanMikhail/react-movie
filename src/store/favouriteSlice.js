import {createSlice} from "@reduxjs/toolkit";

const LS_FAV_KEY = 'fav'

const initialState = {
    favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addFavourite(state, action) {
            state.favourites.push(action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        },
        removeFavourite(state, action) {
            state.favourites = state.favourites.filter(movie => movie.id !== action.payload.id)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        }
    }
})

export const { addFavourite, removeFavourite } = favouriteSlice.actions
export const favourite = favouriteSlice.reducer