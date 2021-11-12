import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from '../Congrats';
import { findByTestAttr } from '../../../../globalTestFiles/test.utils';

Enzyme.configure({ adapter: new EnzymeAdapter() });
const setup = (props = {}) =>
  // props = {success: true}
  // shallow(<Congrats success = {true} />);
  shallow(<Congrats {...props} />);

it('renders without crashing', () => {
  const wrapper = setup();
  // console.log('app', wrapper.debug());
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.length).toBe(1);
});

it('renders without error', () => {
  const wrapper = setup();
  const congComponent = findByTestAttr(wrapper, 'component-congrats');
  expect(congComponent).toHaveLength(1);
});

it('render no text when "success" prop is false', () => {
  const wrapper = setup({ success: false });
  const congComponent = findByTestAttr(wrapper, 'component-congrats');
  expect(congComponent.text()).toBe('');
});

it('render non-empty congrats message when success prop is true', () => {
  const wrapper = setup({ success: true });
  const congratsMsg = findByTestAttr(wrapper, 'congrats-message');
  expect(congratsMsg.text().length).not.toBe(0);
});
