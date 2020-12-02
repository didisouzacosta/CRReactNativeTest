import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import GameList from './index';
import Carrousel from '../carousel';
import {Banner, Game} from '../../../../domain/types';

const games: Game[] = [
  {
    price: {price: 100, discount: 10},
    producer: 'Nintendo',
    title: 'Zelda',
  },
  {
    price: {price: 450},
    producer: 'Data East',
    title: 'Side Pocket',
  },
];

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

describe('Game List Item', () => {
  it('renders correctly', () => {
    const renderHeader = () => <Carrousel banners={banners} />;

    const tree = render(
      <GameList games={games} header={renderHeader()} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('ensure children consistency', () => {
    const renderHeader = () => <Carrousel banners={banners} />;

    const {getByTestId, getAllByTestId} = render(
      <GameList games={games} header={renderHeader()} />,
    );

    const gameListElementItems = getAllByTestId('game-list-item');

    getByTestId('carrousel');

    expect(gameListElementItems.length).toBe(2);
  });

  it('ensure game list item interactivity', () => {
    const mockFunc = jest.fn();
    const {getAllByTestId} = render(
      <GameList games={games} onPress={mockFunc} />,
    );

    const elements = getAllByTestId('game-list-item');

    fireEvent.press(elements[1]);

    expect(mockFunc).toBeCalledWith({
      price: {price: 450},
      producer: 'Data East',
      title: 'Side Pocket',
    });
  });

  it('must be not display header', () => {
    const {getByTestId} = render(<GameList games={games} />);
    expect(() => getByTestId('carrousel')).toThrowError(
      'No instances found with testID: carrousel',
    );
  });
});
