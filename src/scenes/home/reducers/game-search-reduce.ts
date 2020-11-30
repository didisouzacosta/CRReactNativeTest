import {GameSearchItem, ReduceState} from '../../../domain/types';

type Action =
  | {type: 'search start'}
  | {type: 'search success'; payload: GameSearchItem[]}
  | {type: 'search fail'; error: Error};

export type State = ReduceState<GameSearchItem[]>;

const gameSearchReduce = (state: State, action: Action): State => {
  switch (action.type) {
    case 'search start':
      return {...state, isLoading: true};
    case 'search success':
      return {...state, data: action.payload, isLoading: false};
    case 'search fail':
      return {...state, error: action.error, isLoading: false};
  }
};

export default gameSearchReduce;
