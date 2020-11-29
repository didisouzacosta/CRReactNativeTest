import {Banner} from '../../../domain/types';

type Action =
  | {type: 'banner start'}
  | {type: 'banner success'; payload: Banner[]}
  | {type: 'banner fail'; error: Error};

export type State = {
  items: Banner[];
  isLoading?: boolean;
  error?: Error;
};

const bannerReduce = (state: State, action: Action): State => {
  switch (action.type) {
    case 'banner start':
      return {...state, isLoading: true};
    case 'banner success':
      return {...state, items: action.payload, isLoading: false};
    case 'banner fail':
      return {...state, error: action.error, isLoading: false};
  }
};

export default bannerReduce;
