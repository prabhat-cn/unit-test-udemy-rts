import React from 'react';
import { shallow } from 'enzyme';
import GuessedWords from '../GuessedWords';
import { findByTestAttr } from '../../../../globalTestFiles/test.utils';
import '../../../../setupTests';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  shallow(<GuessedWords {...setupProps} />);
};

it('renders without crashing', () => {
  const wrapper: any = setup();
  // console.log('app', wrapper.debug());
  expect(wrapper.exists()).toBe(true);
  // expect(wrapper.length).toBe(1);
});

describe('If there are no word guessed', () => {
  it('render without error', () => {
    let wrapper: any;
    // const setup = wrapper({ guessedWords: [] });
    // const component = findByTestAttr(wrapper, 'component-guessed-words');
    // expect(component.length).toBe(1);
  });
  it('renders instructions to guess a word', () => {});
});

describe('If there are word guessed', () => {});
