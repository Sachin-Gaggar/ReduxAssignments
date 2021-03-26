import ActionTypes from './types';

const initialState = {
  count: 0,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.INCREASE_COUNT:
      return {count: state.count + 1};
    case ActionTypes.DECREASE_COUNT:
      return {count: state.count - 1};
    case ActionTypes.INCREMENT_BY_VALUE:
      return {count: state.count + action.payload};
    default:
      return state;
  }
}
