import React from 'react';
import {ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

import {Banner} from '../../../../domain/types';
import {StackView, ImageView} from '../../../../components';
import {SCALE_8} from '../../../../styles/spacing';

type Prop = {
  banners: Banner[];
  
  onPress?(banner: Banner): void;
};

const Carrousel = ({banners, onPress}: Prop) => {
  return (
    <ScrollView
      testID="carrousel"
      style={styles.scrollView}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}>
      <StackView direction="row" spacing={0} style={styles.stackView}>
        {banners.map((banner, index) => (
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
        ))}
      </StackView>
    </ScrollView>
  );
};

const aspectRatio = 16 / 9;
const marginOffset = SCALE_8 / 2;

const styles = StyleSheet.create({
  scrollView: {
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

export default React.memo(Carrousel);
