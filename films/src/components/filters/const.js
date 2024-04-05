import getCookie from '../../utils/cookie/getCookie';

const Token = getCookie('userToken');

export const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${Token}`,
    },
};

export const selectDeafult = 'Популярности';
