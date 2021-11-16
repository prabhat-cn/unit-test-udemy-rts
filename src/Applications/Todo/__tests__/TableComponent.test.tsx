import React from 'react';
import { shallow, mount } from 'enzyme';
import TableComponent from '../TableComponent';
import { findByTestAttr } from '../../../globalTestFiles/test.utils';
import '../../../setupTests';
import { getTodoData } from '../services/TodoService';

const setup = () => {
  return mount(<TableComponent />);
};

describe('Table component test', () => {
  let mockSetCurrentTodoState: any = jest.fn();
  let wrapper: any;
  let originalUseState: any;
  beforeEach(() => {
    mockSetCurrentTodoState.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ['', mockSetCurrentTodoState]);
    wrapper = setup();
  });
  // after describe original useState
  afterEach(() => {
    React.useState = originalUseState;
  });

  it('render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toHaveLength(1);
  });
  it('render without error', () => {
    const tableComponent = findByTestAttr(wrapper, 'component-table');
    expect(tableComponent).toHaveLength(1);
  });
  it('update useState value', () => {
    expect(mockSetCurrentTodoState).toHaveBeenCalledTimes(0);
    // expect(mockSetCurrentTodoState).toHaveBeenCalledWith(0);
  });

  it('get all todos', () => {
    // https://jestjs.io/docs/expect#tohavebeencalledtimesnumber
    const getTodoAllDatas = jest.fn();
    // getTodoData(getTodoAllDatas, [
    //   'delectus aut autem',
    //   'quis ut nam facilis et officia qui',
    // ]);
    // expect(getTodoAllDatas).toHaveBeenCalledTimes(2);

    // expect(getTodoData()).toHaveBeenCalledTimes(1);
  });
  // it('update useState after called useEffect', () => {
  //   expect(mockSetCurrentTodoState).toHaveBeenCalledTimes(1);
  //   // expect(mockSetCurrentTodoState).toHaveBeenCalledWith(0);
  // });
});
