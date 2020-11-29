type Action =
  | {type: 'increment start'}
  | {type: 'increment success'}
  | {type: 'increment fail'; error: Error};

export type State = {count: number; isLoading?: boolean; error?: Error};

const cartReduce = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment start':
      return {...state, isLoading: true};
    case 'increment success':
      return {...state, count: state.count + 10, isLoading: false};
    case 'increment fail':
      return {...state, error: action.error, isLoading: false};
  }
};

export default cartReduce;
