import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Counter from '../Counter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<Counter />);
  // console.log('app', wrapper.debug());
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.length).toBe(1);
});

// this is TDD
it('renders without error', () => {
  const wrapper = shallow(<Counter />);
  const appCounter = wrapper.find('[data-test="component-counter"]');
  expect(appCounter.length).toBe(1);
});

it('render increment button', () => {});

it('counter display starts at 0', () => {});

it('render counter display', () => {});

it('clicking button increments counter display', () => {});
