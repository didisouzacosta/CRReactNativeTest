import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  StyleProp,
  ViewStyle,
} from 'react-native';

import StackView from '../../../../components/stack-view';
import Assets from './../../../../../assets';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?(): void;
};

const SearchBar = ({children, style, onPress}: Props) => {
  const SearchIcon = Assets.icons.SearchIcon;

  const [displayOverlay, setDisplayOverlay] = useState(false);

  return (
    <View style={[style, styles.container]}>
      <SafeAreaView style={styles.safeArea}>
        <View testID="search-bar" style={styles.searchBox}>
          <StackView direction="row" spacing={16}>
            <TextInput
              style={styles.placeholder}
              placeholder="Informe o termo de busca"
              onFocus={() => setDisplayOverlay(true)}
              onEndEditing={() => setDisplayOverlay(false)}
              clearButtonMode="while-editing"
            />
            <SearchIcon width={20} height={20} />
          </StackView>
        </View>
      </SafeAreaView>
      {displayOverlay && (
        <View testID="search-bar-overlay" style={styles.overlay} />
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    zIndex: 2,
    margin: 16,
    marginBottom: 16,
  },
  searchBox: {
    backgroundColor: 'white',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  placeholder: {
    flex: 1,
    fontSize: 17,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.8,
    zIndex: 1,
  },
});

export default SearchBar;
