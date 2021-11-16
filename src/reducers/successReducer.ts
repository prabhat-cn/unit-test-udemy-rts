import { actionTypes } from '../actions';

export default (state = false, action: any) => {
  // return null;
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
