import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Counter from '../Counter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<Counter />);

const findByTestAttr = (wrapper: any, val: string) =>
  wrapper.find(`[data-test='${val}']`);

it('renders without crashing', () => {
  const wrapper = setup();
  // console.log('app', wrapper.debug());
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.length).toBe(1);
});

// this is TDD
it('renders without error', () => {
  const wrapper = setup();
  // const appCounter = wrapper.find('[data-test="component-counter"]');
  const appCounter = findByTestAttr(wrapper, 'component-counter');
  expect(appCounter.length).toBe(1);
});

it('render increment button', () => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper, 'increment-button');
  expect(incrementButton.length).toBe(1);
});

it('render counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

it('counter display starts at 0', () => {
  const wrapper = setup();
  const counterData = findByTestAttr(wrapper, 'count').text();
  expect(counterData).toBe('0');
});

it('clicking button increments counter display', () => {});
