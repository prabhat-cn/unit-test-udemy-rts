import React from 'react';
import { mount, shallow } from 'enzyme';
import Input from '../Input';
import { findByTestAttr } from '../../../../globalTestFiles/test.utils';
import '../../../../setupTests';

const defaultProps = {
  success: false,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

it('Input renders without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'component-input');
  expect(inputComponent.length).toBe(1);
});
