import {configureStore} from "@reduxjs/toolkit";
import {movieApi} from "./movieApi";
import {favourite} from "./favouriteSlice";


export const store = configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
        favourite,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(movieApi.middleware)
})