import {LSKey} from "../../utils/keyLS";

export const localStorageMiddleware = state => next => action => {
    const favourites = state.getState().favourite.favourites;
    const history = state.getState().history.history
    if(action.type === 'favourite/addFavourite') {
        localStorage.setItem(LSKey('fav'), JSON.stringify([...favourites, action.payload]))
    } else if(action.type === 'favourite/removeFavourite') {
        localStorage.setItem(LSKey('fav'), JSON.stringify(favourites.filter((f) => f !== action.payload)))
    }
    if(action.type === 'history/addHistory') {
        localStorage.setItem(LSKey('hist'), JSON.stringify([...history, action.payload]))
    }
    next(action)
}