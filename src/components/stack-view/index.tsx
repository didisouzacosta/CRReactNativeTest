import React, {memo, useMemo} from 'react';
import {View, StyleSheet, FlexStyle, StyleProp, ViewStyle} from 'react-native';

type SpacerProps = {
  spacing?: number;
};

const Spacer = ({spacing = 8}: SpacerProps) => (
  <View testID="stack-view-spacer" style={{width: spacing, height: spacing}} />
);

type Props = {
  direction?: 'row' | 'column';
  alignItems?: FlexStyle['alignItems'];
  justifyContent?: FlexStyle['justifyContent'];
  spacing?: number;
  testID?: string;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const StackView = ({
  direction = 'column',
  spacing = 8,
  testID = 'stack-view',
  alignItems,
  justifyContent,
  style,
  children,
}: Props) => {
  const {elements} = useMemo(() => {
    let array = React.Children.toArray(children);

    if (array.length < 1) return {array};

    const elements = array.reduce((previous, current, index) => {
      if (index < array.length) {
        return [previous, <Spacer key={index} spacing={spacing} />, current];
      }
      return [previous, current];
    });

    return {elements};
  }, [children]);

  return (
    <View
      testID={testID}
      style={[
        style,
        styles.container,
        {
          flexDirection: direction,
          alignItems: alignItems,
          justifyContent: justifyContent,
        },
      ]}>
      {elements}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});

export default memo(StackView);
