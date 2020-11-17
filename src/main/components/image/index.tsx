import React, {useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';

type Props = {
  testID?: string;
  accessibilityLabel?: string;
  style?: FastImageProps['style'];
  uri?: string;
};

const Image = ({testID, style, accessibilityLabel, uri}: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          testID="image-loader"
          style={styles.load}
          animating={isLoading}
        />
      )}
      <FastImage
        style={style}
        source={{uri: uri}}
        onLoadEnd={() => setIsLoading(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252525',
    borderRadius: 8,
  },
  load: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -8,
    marginTop: -8,
  },
});

export default Image;
