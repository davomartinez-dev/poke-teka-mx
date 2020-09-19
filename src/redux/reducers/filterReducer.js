import * as types from '../actions/actionTypes';

const filter = (state = 'All', action) => {
  switch (action.type) {
    case types.CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filter;
