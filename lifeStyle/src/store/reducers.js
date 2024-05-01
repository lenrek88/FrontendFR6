import {
    ACTION_CHANGE_AVAILABILITY_FOOD,
    ACTION_CHANGE_CELL_ITEM,
    ACTION_EDIT_CELL_ITEM_END,
    ACTION_EDIT_CELL_ITEM_START,
    ACTION_ADD_FAVORITE,
    ACTION_CLEAR_FAVORITE,
    ACTION_ADD_FOOD_FROM_FAVORITE,
} from '../index';
import { ACTION_CLEAR_AVAILABILITY_FOOD } from '../index';
import { ACTION_CLEAR_FOOD_ITEM } from '../index';

const initalState = {
    food: JSON.parse(localStorage.getItem('state_food')),
    favorite: JSON.parse(localStorage.getItem('state_favorite')),
};

//
// Представление стейта:
//
//  food: [
//      {id: 0, item: 'Молоко'},
//      {id: 1, item: 'Хлеб'},
//      ...
//      {id: 24, item: 'Томатная паста'}
//  ];
//

// Представление стейта New:
//
//  food: [
//      {id: 0,
//      rows: [
//      {isEdit: false, field: 'name', item: 'Молоко'},
//      {isEdit: false!, field: 'img', item: src},
//      {isEdit: false, field: 'quantity', item: '1'},
//      {isEdit: false, field: 'b', item: '12'},
//      {isEdit: false, field: 'z', item: '40'},
//      {isEdit: false, field: 'u', item: '120'},
//      ]
//      },
//      {id: 1, item: 'Хлеб'},
//      ...
//      {id: 24, item: 'Томатная паста'}
//  ];
//  favorite: [
//          {id 0,
//
//

export const rootReducer = (state = initalState, action) => {
    switch (action.type) {
        case ACTION_CHANGE_AVAILABILITY_FOOD:
            console.log(state);
            return {
                ...state,
                food: [
                    ...state.food,
                    {
                        id: action.id,
                        favorite: false,
                        rows: [
                            {
                                isEdit: false,
                                field: 'name',
                                item: action.payload[0],
                            },
                            {
                                isEdit: false,
                                field: 'img',
                                item: action.payload[4],
                            },
                            { isEdit: false, field: 'quantity', item: 1 },
                            {
                                isEdit: false,
                                field: 'b',
                                item: action.payload[1],
                            },
                            {
                                isEdit: false,
                                field: 'z',
                                item: action.payload[2],
                            },
                            {
                                isEdit: false,
                                field: 'u',
                                item: action.payload[3],
                            },
                        ],
                    },
                ],
            };
        case ACTION_ADD_FOOD_FROM_FAVORITE: {
            let foodFromFavorite2 = state.food.find(
                (element) => element.id === action.payload.id
            );
            let foodFromFavorite;
            if (foodFromFavorite2 === undefined) {
                foodFromFavorite = state.food.concat(action.payload);
            } else {
                alert('Продукт уже находится в наличии!');
                foodFromFavorite = state.food;
            }
            return {
                ...state,
                food: foodFromFavorite,
            };
        }
        case ACTION_CLEAR_AVAILABILITY_FOOD:
            return { ...state, food: [] };
        case ACTION_CLEAR_FAVORITE:
            return { ...state, favorite: [] };
        case ACTION_CLEAR_FOOD_ITEM:
            return {
                ...state,
                food: [
                    ...state.food.filter((item) => item.id !== action.payload),
                ],
            };
        case ACTION_CHANGE_CELL_ITEM: {
            let newState = state.food.map((obj) => {
                if (obj.id === action.id) {
                    const rows = obj.rows.map((field) => {
                        if (field.field === action.field) {
                            if (action.event === '') {
                                alert('Значение не должно быть пустым!');
                                return field;
                            } else {
                                return { ...field, item: action.event };
                            }
                        } else {
                            return field;
                        }
                    });
                    return { ...obj, rows };
                } else {
                    return obj;
                }
            });

            return { ...state, food: newState };
        }
        case ACTION_EDIT_CELL_ITEM_START: {
            let newState2 = state.food.map((obj) => {
                if (obj.id === action.id) {
                    const rows = obj.rows.map((field) => {
                        if (field.field === action.field) {
                            return { ...field, isEdit: true };
                        } else {
                            return field;
                        }
                    });
                    return { ...obj, rows };
                } else {
                    return obj;
                }
            });
            return { ...state, food: newState2 };
        }
        case ACTION_EDIT_CELL_ITEM_END: {
            let newState3 = state.food.map((obj) => {
                if (obj.id === action.id) {
                    const rows = obj.rows.map((field) => {
                        if (field.field === action.field) {
                            return { ...field, isEdit: false };
                        } else {
                            return field;
                        }
                    });
                    return { ...obj, rows };
                } else {
                    return obj;
                }
            });
            return { ...state, food: newState3 };
        }

        case ACTION_ADD_FAVORITE: {
            let newAddFavoriteArray;
            let newState4 = state.food.map((obj) => {
                if (obj.id === action.id) {
                    if (obj.favorite) {
                        newAddFavoriteArray = [
                            ...state.favorite.filter(
                                (item) => item.id !== action.id
                            ),
                        ];
                        return { ...obj, favorite: false };
                    } else {
                        newAddFavoriteArray = state.favorite.concat(obj);
                        return { ...obj, favorite: true };
                    }
                } else {
                    return obj;
                }
            });
            return {
                ...state,
                food: newState4,
                favorite: newAddFavoriteArray,
            };
        }
        default:
            return state;
    }
};
