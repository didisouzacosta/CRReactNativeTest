import React, {memo} from 'react';
import {TouchableOpacity, StyleSheet, FlatList} from 'react-native';

import {Banner} from '../../../../domain/types';
import {ImageView} from '../../../../components';
import {SCALE_8} from '../../../../styles/spacing';

type Prop = {
  banners: Banner[];
  onPress?(banner: Banner): void;
};

const Carousel = ({banners, onPress}: Prop) => {
  const renderItem = (banner: Banner, index: number) => {
    return (
      <TouchableOpacity
        testID="carrousel-item"
        key={index}
        style={styles.bannerItem}
        activeOpacity={0.8}
        onPress={() => {
          if (onPress) onPress(banner);
        }}>
        <ImageView style={styles.image} uri={banner.imageURL} />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList<Banner>
      style={styles.list}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      data={banners}
      renderItem={({item, index}) => renderItem(item, index)}
    />
  );
};

const aspectRatio = 16 / 9;
const marginOffset = SCALE_8 / 2;

const styles = StyleSheet.create({
  list: {
    overflow: 'visible',
    aspectRatio,
    marginLeft: -marginOffset,
    marginRight: -marginOffset,
  },
  stackView: {
    width: '100%',
  },
  bannerItem: {
    borderRadius: SCALE_8,
    backgroundColor: 'white',
    aspectRatio,
    overflow: 'hidden',
    marginLeft: marginOffset,
    marginRight: marginOffset,
  },
  image: {
    height: '100%',
  },
});

export default memo(Carousel);
