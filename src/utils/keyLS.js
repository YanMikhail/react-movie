export function FavouritesKey() {
    const user = JSON.parse(localStorage.getItem('currUser'))
    if (user?.email) {
        return 'fav' + user.email;
    }
}



