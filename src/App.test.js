import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders react app', () => {
  const e = render(<App />);
  expect(e).toBeTruthy();
});
