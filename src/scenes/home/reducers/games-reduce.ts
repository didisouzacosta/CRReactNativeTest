import {Game, ReduceState} from '../../../domain/types';

type Action =
  | {type: 'games start'}
  | {type: 'games success'; payload: Game[]}
  | {type: 'games fail'; error: Error};

export type State = ReduceState<Game[]>;

const gamesReduce = (state: State, action: Action): State => {
  switch (action.type) {
    case 'games start':
      return {...state, isLoading: true};
    case 'games success':
      return {...state, data: action.payload, isLoading: false};
    case 'games fail':
      return {...state, error: action.error, isLoading: false};
  }
};

export default gamesReduce;
