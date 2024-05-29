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

let nextItemId = 0;

nextItemId = JSON.parse(localStorage.getItem('nextItemId'));

localStorage.setItem('nextItemId', JSON.stringify(nextItemId));

export const changeAvailabilityFood = (payload) => {
    return { type: ACTION_CHANGE_AVAILABILITY_FOOD, id: nextItemId++, payload };
};

export const clearAvailabilityFood = () => {
    return { type: ACTION_CLEAR_AVAILABILITY_FOOD };
};

export const clearAvailabilityFoodItem = (payload) => {
    return { type: ACTION_CLEAR_FOOD_ITEM, payload };
};

export const changeCellItem = (event, obj, field) => {
    return {
        type: ACTION_CHANGE_CELL_ITEM,
        event: event,
        id: obj,
        field: field,
    };
};

export const editCellItemStart = (id, field) => {
    return {
        type: ACTION_EDIT_CELL_ITEM_START,
        id: id,
        field: field,
    };
};

export const editCellItemSEnd = (id, field) => {
    return {
        type: ACTION_EDIT_CELL_ITEM_END,
        id: id,
        field: field,
    };
};

export const addFavorite = (id) => {
    return {
        type: ACTION_ADD_FAVORITE,
        id: id,
    };
};

export const clearFavorite = () => {
    return { type: ACTION_CLEAR_FAVORITE };
};

export const addFoodFromFavorite = (payload) => {
    return { type: ACTION_ADD_FOOD_FROM_FAVORITE, payload: payload };
};
