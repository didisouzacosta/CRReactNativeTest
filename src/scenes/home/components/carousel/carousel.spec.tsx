import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import Carousel from './index';
import {Banner} from '../../../../domain/types';

describe('Game List Item', () => {
  it('renders correctly', () => {
    const banners: Banner[] = [
      {
        imageURL:
          'https://consultaremedios.com.br/assets/logos/og_image-60d1cd891a91b6a811587d22d8a19ae3d96d904e3eeec8cfc1060d572b0cbc14.jpg',
        url: 'https://consultaremedios.com.br',
      },
      {
        imageURL:
          'https://consultaremedios.com.br/assets/logos/og_image-60d1cd891a91b6a811587d22d8a19ae3d96d904e3eeec8cfc1060d572b0cbc14.jpg',
        url: 'https://consultaremedios.com.br',
      },
    ];

    const tree = render(<Carousel banners={banners} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('must be display chidren', () => {
    const banners: Banner[] = [
      {
        imageURL:
          'https://consultaremedios.com.br/assets/logos/og_image-60d1cd891a91b6a811587d22d8a19ae3d96d904e3eeec8cfc1060d572b0cbc14.jpg',
        url: 'https://consultaremedios.com.br',
      },
      {
        imageURL:
          'https://i.pinimg.com/originals/a7/ff/59/a7ff59690f5bdc81b35c6598123f895d.jpg',
        url: 'https://consultaremedios.com.br',
      },
      {
        imageURL:
          'https://revistaconsulta.com.br/wp-content/uploads/2020/03/bannercorona2-min-1-1024x398.jpg',
        url: 'https://consultaremedios.com.br',
      },
    ];

    const {getAllByTestId} = render(<Carousel banners={banners} />);
    const elements = getAllByTestId('carousel-item');

    expect(elements.length).toBe(3);
  });

  it('ensure interactivity with banner itens', () => {
    const banners: Banner[] = [
      {
        imageURL:
          'https://consultaremedios.com.br/assets/logos/og_image-60d1cd891a91b6a811587d22d8a19ae3d96d904e3eeec8cfc1060d572b0cbc14.jpg',
        url: 'https://consultaremedios.com.br/page-1',
      },
      {
        imageURL:
          'https://i.pinimg.com/originals/a7/ff/59/a7ff59690f5bdc81b35c6598123f895d.jpg',
        url: 'https://consultaremedios.com.br/page-2',
      },
    ];

    const mockFunc = jest.fn();
    const {getAllByTestId} = render(
      <Carousel banners={banners} onPress={mockFunc} />,
    );
    const elements = getAllByTestId('carousel-item');

    fireEvent.press(elements[1]);

    expect(mockFunc).toBeCalledWith({
      imageURL:
        'https://i.pinimg.com/originals/a7/ff/59/a7ff59690f5bdc81b35c6598123f895d.jpg',
      url: 'https://consultaremedios.com.br/page-2',
    });
  });
});
