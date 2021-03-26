import {Get_Data} from './constants';

const initialState = {
  data: '',
};

export default function ApiReducer(state = initialState, action) {
  switch (action.type) {
    case Get_Data:
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
}
