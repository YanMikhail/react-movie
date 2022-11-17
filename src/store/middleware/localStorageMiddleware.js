import {FAV} from "../../utils/keyLS";

export const localStorageMiddleware = state => next => action => {
    const favourites = state.getState().favourite.favourites;
    const user = `fav${state.getState().user.email}`
    if(action.type === 'favourite/addFavourite' && FAV === user) {
        localStorage.setItem(FAV, JSON.stringify([...favourites, action.payload]))
    } else if(action.type === 'favourite/removeFavourite') {
        localStorage.setItem(FAV, JSON.stringify(favourites.filter((f) => f !== action.payload)))
    }
    next(action)
}