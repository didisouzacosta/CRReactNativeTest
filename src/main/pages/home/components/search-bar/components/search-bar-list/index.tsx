import React, {memo} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {GameSearchItem} from '../../../../../../../domain/types';

import SearchBarListItem from '../search-bar-list-item';

type Props = {
  items: GameSearchItem[];
  isLoading?: boolean;
  onSelectedItem?(item: GameSearchItem): void;
};

const SearchBarList = ({items, isLoading, onSelectedItem}: Props) => {
  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          testID="search-bar-load"
          style={styles.load}
          animating={true}
        />
      )}
      {items.map((item, index) => (
        <SearchBarListItem
          key={index}
          item={item}
          onSelectedItem={onSelectedItem}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 36,
    left: 0,
    right: 0,
    paddingTop: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  load: {
    margin: 16,
  },
});

export default memo(SearchBarList);
