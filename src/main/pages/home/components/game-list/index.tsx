import React, {memo} from 'react';
import {View, FlatList, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {Game} from '../../../../../domain/types';

import GameListItem from '../game-list-item';

type Props = {
  games: Game[];
  header?: JSX.Element;
  style?: StyleProp<ViewStyle>;
  onPress?(game: Game): void;
};

const GameList = ({games, header, style, onPress}: Props) => {
  return (
    <FlatList<Game>
      testID="game-list"
      style={[style, styles.list]}
      columnWrapperStyle={styles.column}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      data={games}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={header}
      keyExtractor={(_item, index) => `${index}`}
      renderItem={({item}) => (
        <View style={[styles.itemContainer]}>
          <GameListItem game={item} onPress={onPress} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: '48.4%',
  },
  separator: {height: 32},
  list: {overflow: 'visible'},
  column: {justifyContent: 'space-between'},
});

export default memo(GameList);
