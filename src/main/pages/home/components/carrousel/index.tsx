import React from 'react';
import {ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import {Banner} from '../../../../../domain/types';
import {StackView, Image} from '../../../../components';

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
            <Image style={styles.image} uri={banner.imageURL} />
          </TouchableOpacity>
        ))}
      </StackView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    overflow: 'visible',
    aspectRatio: 16 / 9,
    marginLeft: -4,
    marginRight: -4,
  },
  stackView: {
    width: '100%',
  },
  bannerItem: {
    borderRadius: 9,
    backgroundColor: 'white',
    aspectRatio: 16 / 9,
    overflow: 'hidden',
    marginLeft: 4,
    marginRight: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default React.memo(Carrousel);
