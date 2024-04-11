import { createStore, applyMiddleware } from 'redux';
import { ADD_USER_TOKEN } from './actions';
import thunk from 'redux-thunk';

function reducer(state = [], action) {
    switch (action.type) {
        case ADD_USER_TOKEN:
            console.log(action.newToken);
            return { token: action.newToken };

        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
