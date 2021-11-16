import { createStore, applyMiddleware } from 'redux';
import reducers, { RootState } from '../reducers/index';
import { middlewares } from '../reducers/configureStore';

export const storeFactory = (initialState: any) => {
  return createStore(reducers, initialState, applyMiddleware(...middlewares));
};

export const findByTestAttr = (wrapper: any, val: string) => {
  return wrapper.find(`[data-test='${val}']`);
};
