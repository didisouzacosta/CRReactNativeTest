import {ReduceState} from '../../../domain/types';

type Action =
  | {type: 'increment start'}
  | {type: 'increment success'}
  | {type: 'increment fail'; error: Error};

export type State = ReduceState<number>;

const cartReduce = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment start':
      return {...state, isLoading: true};
    case 'increment success':
      return {...state, data: state.data + 1, isLoading: false};
    case 'increment fail':
      return {...state, error: action.error, isLoading: false};
  }
};

export default cartReduce;
