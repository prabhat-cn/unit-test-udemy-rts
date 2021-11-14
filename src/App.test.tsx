import React from 'react';
import { findByTestAttr } from './globalTestFiles/test.utils';
import App from './App';
import { shallow } from 'enzyme';

const setup = () => {
  return shallow(<App />);
};

it('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});
