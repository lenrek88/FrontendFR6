import Cookies from "js-cookie";

export const storage = {

    saveFavoriteCities(city) {
        Cookies.set('FavoriteCity', JSON.stringify([...city]), { expires: 30 });
    },

    getFavoriteCities() {
        if (Cookies.get('FavoriteCity') !== undefined) {
            return new Set(JSON.parse(Cookies.get('FavoriteCity')));
        }
    },
    saveCurrentCity(city) {
        Cookies.set('ThisCity', city, { expires: 30 });
    },
    getCurrentCity() {
       return Cookies.get('ThisCity');
    }


}


