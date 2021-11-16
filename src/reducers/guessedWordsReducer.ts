/* eslint-disable import/no-anonymous-default-export */
import { actionTypes } from '../actions';

export default (state = [], action: any) => {
  // return null;
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};
