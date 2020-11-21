import React from 'react';
import {render, waitForElementToBeRemoved} from '@testing-library/react-native';

import ImageView from '.';

describe('ImageView', () => {
  it('renders correctly', () => {
    const tree = render(
      <ImageView
        style={{width: 300, height: 300, borderRadius: 16}}
        uri="https://randomwordgenerator.com/img/picture-generator/54e3dd404c5aaf14f1dc8460962e33791c3ad6e04e5074417c2f7dd6954cc1_640.jpg"
      />,
    );

    expect(tree).toMatchSnapshot();
  });
});
