import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Game} from '../../../../domain/types';
import {StackView, Text, ImageView} from '../../../../components';
import {Typography, Spacing} from './../../../../styles';
import GamePriceProvider from '../../../../providers/game-price-provider';

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
        <ImageView style={styles.image} uri={imageURL} />
        <StackView spacing={Spacing.SCALE_4}>
          <Text
            style={styles.producer}
            testID="producer"
            accessibilityLabel={`${game.producer}`}>
            {producer}
          </Text>
          <Text
            style={styles.title}
            testID="title"
            accessibilityLabel={`${game.title}`}>
            {title}
          </Text>
          <GamePriceProvider
            gamePrice={game.price}
            children={({
              priceFormatted: oldPriceFormatted,
              finalPriceFormatted,
            }) => (
              <>
                {oldPriceFormatted && (
                  <Text
                    style={styles.oldPrice}
                    testID="old_price"
                    accessibilityLabel={`To ${oldPriceFormatted}`}>
                    {oldPriceFormatted}
                  </Text>
                )}
                <Text
                  style={styles.price}
                  testID="price"
                  accessibilityLabel={`For ${finalPriceFormatted}`}>
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
    borderRadius: Spacing.SCALE_8,
  },
  producer: {
    fontSize: Typography.FONT_SIZE_12,
  },
  title: {
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: Typography.FONT_SIZE_12,
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
    color: '#0091FF',
  },
});

export default React.memo(GameListItem);
