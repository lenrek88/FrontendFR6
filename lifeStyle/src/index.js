import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { rootReducer } from './store/reducers';

export const ACTION_CHANGE_AVAILABILITY_FOOD =
    'ACTION_CHANGE_AVAILABILITY_FOOD';
export const ACTION_CLEAR_AVAILABILITY_FOOD = 'ACTION_CLEAR_AVAILABILITY_FOOD';
export const ACTION_CLEAR_FOOD_ITEM = 'ACTION_CLEAR_FOOD_ITEM';
export const ACTION_CHANGE_CELL_ITEM = 'ACTION_CHANGE_CELL_ITEM';
export const ACTION_EDIT_CELL_ITEM_START = 'ACTION_EDIT_CELL_ITEM_START';
export const ACTION_EDIT_CELL_ITEM_END = 'ACTION_EDIT_CELL_ITEM_END';
export const ACTION_ADD_FAVORITE = 'ACTION_ADD_FAVORITE';
export const ACTION_CLEAR_FAVORITE = 'ACTION_CLEAR_FAVORITE';
export const ACTION_ADD_FOOD_FROM_FAVORITE = 'ACTION_ADD_FOOD_FROM_FAVORITE';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
