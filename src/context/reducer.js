import {changeUser} from './types';

const initialState = {
  user: null,
};

const mainReducer = (state, action) => {
  switch (action.type) {
    case changeUser:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export {
  initialState,
  mainReducer,
};
