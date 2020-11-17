import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Game} from '../../../../../domain/types';
import {StackView, Text, Image} from '../../../../components';
import GamePriceProvider from '../../../../providers/game-price-privider';

type Props = {
  game: Game;
  onPress?(game: Game): void;
};

const GameListItem = ({game, onPress}: Props) => {
  const {title, producer, imageURL} = game;

  return (
    <TouchableOpacity
      testID="game-list-item"
      activeOpacity={0.6}
      onPress={() => {
        if (onPress) onPress(game);
      }}>
      <StackView style={styles.container}>
        <Image style={styles.image} uri={imageURL} />
        <StackView spacing={4}>
          <Text
            style={styles.producer}
            testID="producer"
            accessibilityLabel="Producer">
            {producer}
          </Text>
          <Text style={styles.title} testID="title" accessibilityLabel="Title">
            {title}
          </Text>
          <GamePriceProvider
            gamePrice={game.price}
            children={({oldPriceFormatted, finalPriceFormatted}) => (
              <>
                {oldPriceFormatted && (
                  <Text
                    style={styles.oldPrice}
                    testID="old_price"
                    accessibilityLabel="Old price">
                    {oldPriceFormatted}
                  </Text>
                )}
                <Text
                  style={styles.price}
                  testID="price"
                  accessibilityLabel="Price">
                  {finalPriceFormatted}
                </Text>
              </>
            )}
          />
        </StackView>
      </StackView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    aspectRatio: 1,
    borderRadius: 8,
  },
  producer: {
    fontSize: 12,
  },
  title: {
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
    color: '#0091FF',
  },
});

export default React.memo(GameListItem);
