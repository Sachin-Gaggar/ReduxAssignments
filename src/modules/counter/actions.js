import ActionTypes from './types';

export const increaseCount = () => {
  return {
    type: ActionTypes.INCREASE_COUNT,
  };
};

// this.props.increaseCount UI
// dispatch(increaseCount)

export const decreaseCount = () => ({
  type: ActionTypes.DECREASE_COUNT,
});

export const increaseByValue = (value) => {
  return {
    type: ActionTypes.INCREMENT_BY_VALUE,
    payload: value,
  };
};
