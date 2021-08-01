import ACTION_TYPES from './actionTypes';

export const getHeroesRequest = () => ({
  type: ACTION_TYPES.GET_HEROES_REQUEST,
});

export const getHeroesSuccess = values => ({
  type: ACTION_TYPES.GET_HEROES_SUCCESS,
  values,
});

export const getHeroesError = error => ({
  type: ACTION_TYPES.GET_HEROES_ERROR,
  error,
});
