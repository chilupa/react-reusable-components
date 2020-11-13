import React from 'react';
import { render } from '@testing-library/react';
import Expire from '../Expire';

describe('Expire component', () => {
  it('renders correctly', () => {
    const props = { delay: 5000, children: '' };
    const component = render(<Expire {...props} />);
    expect(component).toBeTruthy();
  });
});
