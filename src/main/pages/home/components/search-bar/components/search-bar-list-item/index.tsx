import React, {memo} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import Assets from '../../../../../../../assets';
import {StackView, Text} from '../../../../../../components';
import {GameSearchItem} from '../../../../../../../domain/types';

type Props = {
  item: GameSearchItem;
  onSelectedItem?(item: GameSearchItem): void;
};

const SearchBarListItem = ({item, onSelectedItem}: Props) => {
  const {ArrowIcon} = Assets.icons;
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          if (onSelectedItem) onSelectedItem(item);
        }}>
        <StackView
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={styles.container}>
          <Text style={styles.text}>{item.title}</Text>
          <ArrowIcon width={12} height={12} />
        </StackView>
      </TouchableOpacity>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#f1f1f1',
  },
  text: {
    color: 'black',
  },
});

export default memo(SearchBarListItem);
