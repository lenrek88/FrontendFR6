import { createAction } from "@reduxjs/toolkit";

// export const ADD_USER_TOKEN = 'ADD_USER_TOKEN';
// export const SET_FILMS = 'SET_FILMS';
// export const SET_PAGE = 'SET_PAGE';

export const addUserToken = createAction('ADD_USER_TOKEN');
export const setFilms = createAction('SET_FILMS');
export const setPage = createAction('SET_PAGE');

// export function addUserToken(token) {
//     return {
//         type: ADD_USER_TOKEN,
//         newToken: token,
//     };
// }

// export function setFilms(response) {
//     return {
//         type: SET_FILMS,
//         data: response,
//     };
// }

// export function setPage(value) {
//     return {
//         type: SET_PAGE,
//         page: value,
//     };
// }
