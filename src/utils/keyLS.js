function FavouritesKey() {
    const user = JSON.parse(localStorage.getItem('currUser'))
    if (user) {
        return 'fav' + user.email;
    }
}


export const FAV = FavouritesKey()
