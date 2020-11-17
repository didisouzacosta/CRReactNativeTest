import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';

import {Text} from './../../../../components';

type Props = {
  style?: StyleProp<ViewStyle>;
  children?: JSX.Element;
};

const CartButton = ({style, children}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={[style, styles.container]}>
      {children}
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
  },
  badge: {
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'white',
    width: 26,
    aspectRatio: 1,
    borderRadius: 13,
    right: 0,
  },
  badgeCount: {
    textAlign: 'center',
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default CartButton;
