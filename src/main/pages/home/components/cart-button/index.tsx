import React from 'react';
import {TouchableOpacity, StyleSheet, StyleProp, ViewStyle} from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
  children?: JSX.Element;
};

const CartButton = ({style, children}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={[style, styles.container]}>
      {children}
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
});

export default CartButton;
