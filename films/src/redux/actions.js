export const ADD_USER_TOKEN = 'ADD_USER_TOKEN';

export function addUserToken(token) {
    return {
        type: ADD_USER_TOKEN,
        newToken: token,
    };
}
