import React from 'react';
import { shallow, mount } from 'enzyme';
import Todo from '../Todo';
import { findByTestAttr } from '../../../globalTestFiles/test.utils';
import '../../../setupTests';

const setup = (props = {}) => {
  return mount(<Todo />);
};

describe('Todo main component test', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = setup();
  });
  it('renders without crashing', () => {
    // const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toHaveLength(1);
  });
  it('renders without error', () => {
    // const wrapper = setup();
    const todoComponent = findByTestAttr(wrapper, 'component-todo');
    // const todoComponent = wrapper.find('.table-inner');
    expect(todoComponent).toHaveLength(1);
  });
});