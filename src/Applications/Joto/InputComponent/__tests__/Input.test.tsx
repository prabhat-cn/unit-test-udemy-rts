import React from 'react';
import { mount, shallow } from 'enzyme';
import Input from '../Input';
import { findByTestAttr } from '../../../../globalTestFiles/test.utils';
import '../../../../setupTests';

const defaultProps = {
  success: false,
};

// Mock entire module for destructuring useState on import ///

// const mockSetCurrentGuess = jest.fn();

// // bcz useState having initial state
// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: (initialState: any) => [initialState, mockSetCurrentGuess],
// }));

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

it('Input renders without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'component-input');
  expect(inputComponent.length).toBe(1);
});

describe('state controlled input field', () => {
  let mockSetCurrentGuess: any = jest.fn();
  let wrapper: any;
  // to restore original useState
  let originalUseState: any;
  // set repeted code in beforeEach()
  beforeEach(() => {
    // to clear mock
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    wrapper = setup();
  });
  // after describe original useState
  afterEach(() => {
    React.useState = originalUseState;
  });

  it('state updates with value of input box upon change', () => {
    // if useState used as a spy
    // const mockSetCurrentGuess = jest.fn();
    // React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    // const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };
    // for input field onChange
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  it('field is cleared upon submit button click', () => {
    // if useState used as a spy
    // const mockSetCurrentGuess = jest.fn();
    // React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    // const wrapper = setup();
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    // after "evt.preventDefault();"
    submitButton.simulate('click', { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
