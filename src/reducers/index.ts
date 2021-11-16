import { combineReducers } from 'redux';

import successReducer from './successReducer';

const reducers = combineReducers({
  success: successReducer,
});

export default reducers;
//This RootState is required to use useSelector later on
export type RootState = ReturnType<typeof reducers>;

// export default combineReducers({
//   success: successReducer,
// });
