export function LSKey(dir) {
    const user = JSON.parse(localStorage.getItem('currUser'))
    if (user?.email) {
        return dir + user.email;
    }
}


