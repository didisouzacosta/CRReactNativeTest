import React from 'react';
import {render} from '@testing-library/react-native';

import GameListItem from './index';
import {Game} from '../../../../domain/types';

describe('Game List Item', () => {
  it('renders correctly', () => {
    const game: Game = {
      price: {price: 100, discount: 10},
      producer: 'Nintendo',
      title: 'Zelda',
    };

    const tree = render(<GameListItem game={game} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('ensure game infos consistency', () => {
    const game: Game = {
      price: {price: 100, discount: 10},
      producer: 'Nintendo',
      title: 'Zelda Breath of the Wild',
    };

    const {getByTestId} = render(<GameListItem game={game} />);
    const producer = getByTestId('producer');
    const title = getByTestId('title');
    const oldPrice = getByTestId('old_price');
    const price = getByTestId('price');

    expect(producer.children[0]).toEqual('Nintendo');
    expect(title.children[0]).toEqual('Zelda Breath of the Wild');
    expect(oldPrice.children[0]).toEqual('de R$\xa0100,00');
    expect(price.children[0]).toBe('R$\xa090,00');
  });

  it('should display `grátis` if prices is less than zero', () => {
    const game: Game = {
      price: {price: 100, discount: 110},
      producer: 'Nintendo',
      title: 'Zelda Breath of the Wild',
    };

    const {getByTestId} = render(<GameListItem game={game} />);
    const price = getByTestId('price');

    expect(price.children[0]).toBe('Grátis');
  });

  it('should display `grátis` if prices is zero', () => {
    const game: Game = {
      price: {price: 100, discount: 100},
      producer: 'Nintendo',
      title: 'Zelda Breath of the Wild',
    };

    const {getByTestId} = render(<GameListItem game={game} />);
    const price = getByTestId('price');

    expect(price.children[0]).toBe('Grátis');
  });

  it('must be not display old price if not exists discount', () => {
    const game: Game = {
      price: {price: 100},
      producer: 'Nintendo',
      title: 'Zelda Breath of the Wild',
    };

    const {getByTestId} = render(<GameListItem game={game} />);

    expect(() => getByTestId('old_price')).toThrowError(
      'No instances found with testID: old_price',
    );
  });

  it('must be not display old price if discount is zero', () => {
    const game: Game = {
      price: {price: 900, discount: 0},
      producer: 'Nintendo',
      title: 'Zelda Breath of the Wild',
    };

    const {getByTestId} = render(<GameListItem game={game} />);

    const price = getByTestId('price');

    expect(price.children[0]).toBe('R$\xa0900,00');
    expect(() => getByTestId('old_price')).toThrowError(
      'No instances found with testID: old_price',
    );
  });
});
