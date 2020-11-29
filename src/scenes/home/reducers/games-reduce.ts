import {Game} from '../../../domain/types';

type Action =
  | {type: 'games start'}
  | {type: 'games success'; payload: Game[]}
  | {type: 'games fail'; error: Error};

export type State = {
  items: Game[];
  isLoading?: boolean;
  error?: Error;
};

const gamesReduce = (state: State, action: Action): State => {
  switch (action.type) {
    case 'games start':
      return {...state, isLoading: true};
    case 'games success':
      return {...state, items: action.payload, isLoading: false};
    case 'games fail':
      return {...state, error: action.error, isLoading: false};
  }
};

export default gamesReduce;
