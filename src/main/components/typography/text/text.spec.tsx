import React from 'react';
import {render} from '@testing-library/react-native';

import Text from './index';

describe('Game List Item', () => {
  it('renders correctly', () => {
    const tree = render(<Text style={{color: 'black'}}>Adriano</Text>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
