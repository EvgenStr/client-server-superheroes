import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  heroes: [],
  isFetching: false,
  error: null,
};

function heroReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_HERO_REQUEST: {
      return { ...state, isFetching: true };
    }
    case ACTION_TYPES.CREATE_HERO_SUCCESS: {
      return {
        ...state,
        heroes: [...state.heroes, action.values],
        isFetching: false,
      };
    }
    case ACTION_TYPES.CREATE_HERO_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    case ACTION_TYPES.GET_HEROES_REQUEST: {
      return { ...state, isFetching: true };
    }
    case ACTION_TYPES.GET_HEROES_SUCCESS: {
      return { ...state, heroes: action.values, isFetching: false };
    }
    case ACTION_TYPES.GET_HEROES_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}

export default heroReducer;
