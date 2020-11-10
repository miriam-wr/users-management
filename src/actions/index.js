import { SET_USER_LIST, UPDATE_USER } from './actionTypes'

export const setUserList = userList => {
    return {
        type: SET_USER_LIST,
        payload: {userList}
    };
};


export const updateUser = user => {
    return {
        type: UPDATE_USER,
        payload: {user}
    };
};
