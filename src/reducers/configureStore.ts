import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './index';

// export default createStore(rootReducer);
export const middlewares = [ReduxThunk];
export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(...middlewares)
);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
