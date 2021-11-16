import React from 'react';
import { shallow, mount } from 'enzyme';
import Table from '../Table';
import { findByTestAttr } from '../../../globalTestFiles/test.utils';
import '../../../setupTests';
import { getTodoData } from '../services/TodoService';

const setup = () => {
  return mount(<Table />);
};

describe.skip('Table component test', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = setup();
  });
  it('render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toHaveLength(1);
  });
  it('render without error', () => {
    const tableComponent = findByTestAttr(wrapper, 'component-table');
    expect(tableComponent).toHaveLength(1);
  });

  it('get all todos', () => {
    expect(getTodoData).toHaveBeenNthCalledWith(1);
  });
});
