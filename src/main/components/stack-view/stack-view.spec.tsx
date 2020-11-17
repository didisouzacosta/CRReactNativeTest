import React from 'react';
import {Text} from 'react-native';
import StackView from './index';

import {render} from '@testing-library/react-native';

describe('StackView component', () => {
  it('renders correctly', () => {
    const stack = (
      <StackView>
        <Text testID="game">1) Zelda Breath Of The Wild</Text>
        <Text testID="game">2) Super Metroid</Text>
      </StackView>
    );

    const tree = render(stack).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('there should be no spaces when there is only 1 child', () => {
    const stack = (
      <StackView>
        <Text testID="game">1) Zelda Breath Of The Wild</Text>
      </StackView>
    );

    const {getByTestId, toJSON} = render(stack);
    const tree = toJSON();

    expect(tree).toMatchSnapshot();

    try {
      getByTestId('stack-view-spacer');
      fail();
    } catch (e) {
      expect(e.message).toBe(
        'No instances found with testID: stack-view-spacer',
      );
    }
  });

  it('must display all children', () => {
    const stack = (
      <StackView>
        <Text testID="game">1) Zelda Breath Of The Wild</Text>
        <Text testID="game">2) Super Metroid</Text>
        <Text testID="game">3) Chrono Trigger</Text>
        <Text testID="game">4) Breath of Fire</Text>
      </StackView>
    );

    const items = render(stack).getAllByTestId('game');

    expect(items).toHaveLength(4);
    expect(items[0].children[0]).toBe('1) Zelda Breath Of The Wild');
    expect(items[1].children[0]).toBe('2) Super Metroid');
    expect(items[2].children[0]).toBe('3) Chrono Trigger');
    expect(items[3].children[0]).toBe('4) Breath of Fire');
  });

  it('ensure custom style configurations', () => {
    const stack = (
      <StackView
        style={{
          width: 300,
          height: 100,
          padding: 16,
          borderRadius: 16,
          backgroundColor: '#f1f1f1',
        }}>
        <Text testID="game" style={{width: 30}}>
          1) Zelda Breath Of The Wild
        </Text>
        <Text testID="game" style={{flex: 1}}>
          2) Super Metroid
        </Text>
      </StackView>
    );

    const tree = render(stack).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
