import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import SearchBar from './';
import {View} from 'react-native';

describe('Search Bar', () => {
  it('ensure search bar text input props consistency', () => {
    const mockOnChangeTextFunc = jest.fn();
    const {getByTestId} = render(
      <SearchBar items={[]} onChangeText={mockOnChangeTextFunc} />,
    );
    const textInput = getByTestId('search-bar-text-input');

    expect(textInput.props.placeholder).toEqual('Informe o termo de busca');
    expect(textInput.props.clearButtonMode).toEqual('while-editing');
  });

  it('ensure on change text value consistency', () => {
    const mockOnChangeTextFunc = jest.fn();
    const {getByTestId} = render(
      <SearchBar items={[]} onChangeText={mockOnChangeTextFunc} />,
    );
    const textInput = getByTestId('search-bar-text-input');

    fireEvent.changeText(textInput, 'zelda');

    expect(mockOnChangeTextFunc).toBeCalledWith('zelda');
  });

  it('ensure on touch consistency', () => {
    const mockOnTouchFunc = jest.fn();
    const {getByTestId} = render(
      <SearchBar items={[]} onTouch={mockOnTouchFunc} />,
    );
    const textInput = getByTestId('search-bar-text-input');

    fireEvent(textInput, 'onTouchStart');

    expect(mockOnTouchFunc).toBeCalled();
  });

  it('toggle overlay visibility', () => {
    const {getByTestId} = render(
      <SearchBar items={[]}>
        <View style={{width: 200, height: 200}} />
      </SearchBar>,
    );
    const textInput = getByTestId('search-bar-text-input');

    fireEvent(textInput, 'onFocus');

    getByTestId('search-bar-overlay');

    fireEvent(textInput, 'onEndEditing');

    expect(() => getByTestId('search-bar-overlay')).toThrow();
  });

  it('remove overlay when touching ', async () => {
    const {getByTestId} = render(
      <SearchBar items={[]}>
        <View style={{width: 200, height: 200}} />
      </SearchBar>,
    );
    const textInput = getByTestId('search-bar-text-input');

    fireEvent(textInput, 'onFocus');

    const overlay = getByTestId('search-bar-overlay');

    fireEvent(overlay, 'onTouchEnd');

    expect(() => getByTestId('search-bar-overlay')).toThrow();
  });
});
