import {createSlice} from "@reduxjs/toolkit";
import { FavouritesKey} from "../utils/keyLS";

const user = FavouritesKey()
const initialState = {
    favourites: JSON.parse(localStorage.getItem(user) || '[]')
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