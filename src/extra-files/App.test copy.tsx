import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders "Unit Testing React Ts Using Jest & Enzyme" link', () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Unit Testing React Ts Using Jest & Enzyme/i
  );
  expect(linkElement).toBeInTheDocument();
});
