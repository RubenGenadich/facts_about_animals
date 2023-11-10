import { ALL_CATS_START, ALL_CATS_SUCCESS, ALL_CATS_ERROR } from './constants';

const defaultState = {
  catsInfo: {
    data: [],
    isLoading: false,
    error: false,
  },
};

export default function cats(state = defaultState, action) {
  switch (action.type) {
    case ALL_CATS_START: {
      return {
        ...state,
        catsInfo: {
          data: [],
          isLoading: true,
          error: false,
        },
      };
    }
    case ALL_CATS_SUCCESS: {
      return {
        ...state,
        catsInfo: {
          data: [...action.payload.data],
          isLoading: false,
          error: false,
        },
      };
    }
    case ALL_CATS_ERROR: {
      return {
        ...state,
        catsInfo: {
          data: [],
          isLoading: false,
          error: action.payload,
        },
      };
    }
    default:
      return state;
  }
}
