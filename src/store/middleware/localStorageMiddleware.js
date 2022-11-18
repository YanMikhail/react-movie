import {FavouritesKey} from "../../utils/keyLS";

export const localStorageMiddleware = state => next => action => {
    const favourites = state.getState().favourite.favourites;
    // const user = FavouritesKey()
    if(action.type === 'favourite/addFavourite') {
        localStorage.setItem(FavouritesKey(), JSON.stringify([...favourites, action.payload]))
    } else if(action.type === 'favourite/removeFavourite') {
        localStorage.setItem(FavouritesKey(), JSON.stringify(favourites.filter((f) => f !== action.payload)))
    }
    next(action)
}