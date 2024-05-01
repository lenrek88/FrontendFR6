import { addUserToken, setFilms, setPage } from './actions';
import { configureStore, createReducer } from '@reduxjs/toolkit';

const filmReducer = createReducer([], (builder) => {
    builder.addCase(setFilms.type, (state, action) => {
        return (state = action.payload);
    });
});

const userReducer = createReducer('', (builder) => {
    builder.addCase(addUserToken.type, (state, action) => {
        return (state = action.payload);
    });
});

const pageReducer = createReducer(1, (builder) => {
    builder.addCase(setPage.type, (state, action) => {
        return (state = action.payload);
    });
});

const store = configureStore({
    reducer: {
        results: filmReducer,
        token: userReducer,
        page: pageReducer,
    },
});

console.log(store.getState());

export default store;
