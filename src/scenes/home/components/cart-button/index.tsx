import React, {memo} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  View,
  ActivityIndicator,
} from 'react-native';

import Text from '../../../../components/typography/text';
import {FONT_SIZE_12} from '../../../../styles/typography';
import Assets from './../../../../assets';

type Props = {
  style?: StyleProp<ViewStyle>;
  count?: number;
  isLoading?: boolean;
  onPress?(): void;
};

const Loader = () => {
  return <ActivityIndicator />;
};

const Counter = ({value}: {value?: number}) => {
  return <Text style={styles.badgeCount}>{value}</Text>;
};

const CartButton = ({style, count, isLoading, onPress}: Props) => {
  const {ShoppingCartIcon} = Assets.icons;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[style, styles.container]}
      onPress={onPress}>
      <ShoppingCartIcon width="50%" height="50%" />
      <View style={styles.badge}>
        {isLoading && <Loader />}
        {!isLoading && <Counter value={count} />}
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
