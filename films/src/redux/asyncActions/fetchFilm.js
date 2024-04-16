import { setFilms } from '../actions';

export const fetchFilm = (urlFind, OPTIONS) => {
    return function (dispatch) {
        fetch(urlFind, OPTIONS)
            .then((response) => response.json())
            .then((response) => {
                dispatch(setFilms(response.results));
            })
            .catch((err) => console.error(err));
    };
};
