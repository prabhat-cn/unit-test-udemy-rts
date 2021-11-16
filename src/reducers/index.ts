import { combineReducers } from 'redux';

import successReducer from './successReducer';
import guessedWordsReducer from './guessedWordsReducer';
import secretwordReducer from './secretwordReducer';

const reducers = combineReducers({
  success: successReducer,
  guessedWords: guessedWordsReducer,
  secretWord: secretwordReducer,
});

export default reducers;
//This RootState is required to use useSelector later on
export type RootState = ReturnType<typeof reducers>;

// export default combineReducers({
//   success: successReducer,
// });
