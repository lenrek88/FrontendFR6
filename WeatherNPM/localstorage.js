
export const storage = {

    saveFavoriteCities(city) {
        localStorage.setItem('FavoriteCity', JSON.stringify([...city]));
    },

    getFavoriteCities() {
        return new Set(JSON.parse(localStorage.getItem('FavoriteCity')));
    },
    saveCurrentCity(city) {
        localStorage.setItem('ThisCity', city);
    },
    getCurrentCity() {
       return localStorage.getItem('ThisCity');
    }


}


