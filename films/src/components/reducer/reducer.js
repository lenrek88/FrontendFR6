export const initalState = {
    keyS: true,
}

export function filtersReducer(state, action) {
    switch(action.type) {
        case 'clear':
            return {
                ...state,
                keyS: !state.keyS,
            }
        default:
            throw Error(alert('Неверный action.type : ', action.type))
    }

}