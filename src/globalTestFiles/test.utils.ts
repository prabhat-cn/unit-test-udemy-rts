import { createStore } from 'redux';
import reducers, { RootState } from '../reducers/index';

export const storeFactory = (initialState: any) => {
  return createStore(reducers, initialState);
};

export const findByTestAttr = (wrapper: any, val: string) => {
  return wrapper.find(`[data-test='${val}']`);
};
