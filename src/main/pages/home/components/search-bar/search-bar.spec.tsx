import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import SearchBar from './';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.useFakeTimers();

describe('Search Bar', () => {
  it('ensure search bar text input props consistency', () => {
    const mockOnChangeTextFunc = jest.fn();
    const {getByTestId} = render(
      <SearchBar onChangeText={mockOnChangeTextFunc} />,
    );
    const textInput = getByTestId('search-bar-text-input');

    expect(textInput.props.placeholder).toEqual('Informe o termo de busca');
    expect(textInput.props.clearButtonMode).toEqual('while-editing');
  });

  it('ensure on change text value consistency', () => {
    const mockOnChangeTextFunc = jest.fn();
    const {getByTestId} = render(
      <SearchBar onChangeText={mockOnChangeTextFunc} />,
    );
    const textInput = getByTestId('search-bar-text-input');

    fireEvent.changeText(textInput, 'zelda');

    expect(mockOnChangeTextFunc).toBeCalledWith('zelda');
  });

  it('ensure on touch consistency', () => {
    const mockOnTouchFunc = jest.fn();
    const {getByTestId} = render(<SearchBar onTouch={mockOnTouchFunc} />);
    const textInput = getByTestId('search-bar-text-input');

    fireEvent(textInput, 'onTouchStart');

    expect(mockOnTouchFunc).toBeCalled();
  });
});
