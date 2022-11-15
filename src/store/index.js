import {configureStore} from "@reduxjs/toolkit";
import {movieApi} from "./movieApi";
import {favourite} from "./favouriteSlice";
import {user} from "./userSlice";


export const store = configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
        favourite,
        user,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(movieApi.middleware)
})