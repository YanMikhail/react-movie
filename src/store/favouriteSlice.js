import {createSlice} from "@reduxjs/toolkit";
import {LSKey} from "../utils/keyLS";


const initialState = {
    favourites: JSON.parse(localStorage.getItem(LSKey('fav')) || '[]')
}

export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addAllFavourites(state, action) {
            state.favourites = action.payload
        },
        addFavourite(state, action) {
            state.favourites.push(action.payload)
        },
        removeFavourite(state, action) {
            state.favourites = state.favourites.filter(movie => movie.id !== action.payload.id)
        },
        clearAllFavourite(state) {
            state.favourites = []
        }
    }
})

export const { addFavourite, removeFavourite, clearAllFavourite, addAllFavourites } = favouriteSlice.actions
export const favourite = favouriteSlice.reducer