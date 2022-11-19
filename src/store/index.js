import {configureStore} from "@reduxjs/toolkit";
import {movieApi} from "./movieApi";
import {favourite} from "./favouriteSlice";
import {user} from "./userSlice";
import {history} from "./historySlice"
import {localStorageMiddleware} from "./middleware/localStorageMiddleware";


export const store = configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
        favourite,
        user,
        history,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(movieApi.middleware, localStorageMiddleware)
})