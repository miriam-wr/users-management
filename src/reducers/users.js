import update from 'react-addons-update';
import { SET_USER_LIST, UPDATE_USER } from '../actions/actionTypes'

const initialState = {
  userList: []
}

export default (state = initialState, action) => {

  const {payload} = action;

  switch (action.type) {
    case SET_USER_LIST:
      return {
        ...state,
        userList: payload.userList
      };
    case UPDATE_USER:
      const {user} = payload;
      const {id} = user;
      var userIndex = state.userList.findIndex(user => user.id == id)
      var newState = {...state}
      newState.userList[userIndex] = user
      return newState;
    default:
      return state;
  }
};