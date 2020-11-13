import React from 'react';
import { render } from '@testing-library/react';
import Expire from '../Expire';

describe('Expire component', () => {
  it('renders correctly', () => {
    const component = render(<Expire />);
    expect(component).toBeTruthy();
  });
});
