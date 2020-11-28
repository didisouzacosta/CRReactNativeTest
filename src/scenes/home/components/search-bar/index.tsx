import React, {useEffect, useRef, useState, memo} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  StyleProp,
  ViewStyle,
  Animated,
} from 'react-native';

import {useDebouncedCallback} from 'use-debounce';

import {GameSearchItem} from '../../../../domain/types';
import {StackView} from '../../../../components';
import Assets from './../../../../assets';
import SearchBarList from './components/search-bar-list';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  items: GameSearchItem[];
  isLoading?: boolean;
  delay?: number;
  onSelectedItem?(item: GameSearchItem): void;
  onChangeText?(text: string): void;
  onTouch?(): void;
};

const SearchBar = ({
  children,
  style,
  items,
  isLoading,
  delay = 300,
  onSelectedItem,
  onChangeText,
  onTouch,
}: Props) => {
  const SearchIcon = Assets.icons.SearchIcon;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const searchTextInputRef = useRef<TextInput>(null);

  const [isActive, setIsActive] = useState(false);
  const [focusing, setFocusing] = useState(false);

  useEffect(() => {
    setIsActive(focusing);

    Animated.timing(fadeAnim, {
      toValue: focusing ? 0.6 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [focusing]);

  const onChangeTextHandler = useDebouncedCallback((text: string) => {
    if (onChangeText) onChangeText(text);
  }, delay);

  return (
    <View style={[style, styles.container]}>
      <SafeAreaView style={styles.safeArea}>
        <View testID="search-bar" style={styles.searchBox}>
          <StackView direction="row" spacing={16}>
            <TextInput
              testID="search-bar-text-input"
              onChangeText={(text) => onChangeTextHandler.callback(text)}
              ref={searchTextInputRef}
              style={styles.placeholder}
              placeholder="Informe o termo de busca"
              onFocus={() => setFocusing(true)}
              onTouchStart={onTouch}
              onEndEditing={() => setFocusing(false)}
              clearButtonMode="while-editing"
            />
            <SearchIcon width={20} height={20} />
          </StackView>
          {isActive && (
            <SearchBarList
              items={items}
              isLoading={isLoading}
              onSelectedItem={onSelectedItem}
            />
          )}
        </View>
      </SafeAreaView>
      {isActive && (
        <Animated.View
          testID="search-bar-overlay"
          style={{...styles.overlay, opacity: fadeAnim}}
          onTouchEnd={() => {
            searchTextInputRef?.current?.blur();
            setFocusing(false);
          }}
        />
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
    opacity: 0.6,
    zIndex: 1,
  },
});

export default memo(SearchBar);
