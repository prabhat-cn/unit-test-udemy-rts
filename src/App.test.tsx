import React from 'react';
import { Provider } from 'react-redux';
import { findByTestAttr, storeFactory } from './globalTestFiles/test.utils';
import App from './App';
import { mount, shallow } from 'enzyme';
import { getSecretWord as mockGetSecretWord } from './actions';

// Activate global mock to make sure getSecretWord doesn't make network call
jest.mock('./actions');

const setup = (initialState = {}) => {
  // return shallow(<App />);
  // if use useEffect function
  // return mount(<App />);
  // after using redux to dom rendering
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

it('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});

describe('get secret word', () => {
  let wrapper: any;
  // let mockGetSecretWord: any
  beforeEach(() => {
    wrapper = setup();
    // clear the mock calls from previous tests
    mockGetSecretWord.mockClear();
  });
  // it('get secret word on app mount', () => {
  //   // how many times mock will be called
  //   expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  // });
  it('getSecretWord does not run on app update', () => {
    // https://github.com/enzymejs/enzyme/issues/2254
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
