import React from 'react';

import {render, waitFor} from '@testing-library/react-native';

import HomePage from './index';

describe('Home Page', () => {
  it('renders correctly', async () => {
    const {getAllByTestId, toJSON} = render(<HomePage />);

    await waitFor(() => getAllByTestId('game-list-item'));

    const tree = toJSON();

    expect(tree).toMatchSnapshot();
  });
});
