/* eslint-disable import/no-anonymous-default-export */
import { actionTypes } from '../actions/index';

export default (state = '', action: any) => {
  // return state;
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};
