import React from 'react';
import {Text as _Text, TextStyle, StyleProp, StyleSheet} from 'react-native';

type Props = {
  children?: React.ReactChild;
  style?: StyleProp<TextStyle>;
  testID?: string;
  accessibilityLabel?: string;
};

const Text = ({children, style, testID, accessibilityLabel}: Props) => {
  return (
    <_Text
      style={[styles.text, style]}
      testID={testID}
      accessibilityLabel={accessibilityLabel}>
      {children}
    </_Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: 'white',
  },
});

export default Text;
