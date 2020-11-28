import React, {memo} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';

import Text from '../../../../components/typography/text';
import {FONT_SIZE_12} from '../../../../styles/typography';
import Assets from './../../../../assets';

type Props = {
  style?: StyleProp<ViewStyle>;
};

const CartButton = ({style}: Props) => {
  const {ShoppingCartIcon} = Assets.icons;

  return (
    <TouchableOpacity activeOpacity={0.9} style={[style, styles.container]}>
      <ShoppingCartIcon width="50%" height="50%" />
      <View style={styles.badge}>
        <Text style={styles.badgeCount}>9+</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '20%',
    aspectRatio: 1,
    borderRadius: 100,
    backgroundColor: 'red',
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'white',
    width: 26,
    aspectRatio: 1,
    borderRadius: 13,
    top: 0,
    right: 0,
  },
  badgeCount: {
    textAlign: 'center',
    fontSize: FONT_SIZE_12,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default memo(CartButton);
