import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  StyleProp,
  ViewStyle,
  Button,
} from 'react-native';
import {StackView} from '../../../../components';

type Props = {
  style?: StyleProp<ViewStyle>;
};

const SearchBar = ({style}: Props) => {
  return (
    <View testID="search-bar" style={[styles.container, style]}>
      <StackView direction="row" spacing={16}>
        <TextInput
          style={styles.placeholder}
          placeholder="Informe o termo de busca"
        />
        <Button title="Search" onPress={() => {}} />
      </StackView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  placeholder: {
    flex: 1,
    fontSize: 17,
  },
});

export default SearchBar;
