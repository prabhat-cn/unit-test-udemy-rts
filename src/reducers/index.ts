import { combineReducers } from 'redux';

import successReducer from './successReducer';
import guessedWordsReducer from './guessedWordsReducer';

const reducers = combineReducers({
  success: successReducer,
  guessedWords: guessedWordsReducer,
});

export default reducers;
//This RootState is required to use useSelector later on
export type RootState = ReturnType<typeof reducers>;

// export default combineReducers({
//   success: successReducer,
// });
