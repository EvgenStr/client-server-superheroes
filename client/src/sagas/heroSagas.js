import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as HeroActionCreators from '../actions/heroCreators';
import * as GetHeroesCreators from '../actions/getHeroesCreators';

export function * createHeroSaga (action) {
  try {
    const { values } = action;
    const {
      data: {
        data: { createdHero },
      },
    } = yield API.createHero(values);
    console.log(createdHero);

    yield put(HeroActionCreators.createHeroSuccess(createdHero));
  } catch (error) {
    yield put(HeroActionCreators.createHeroError(error));
  }
}

export function * getHeroesSaga () {
  try {
    const { data } = yield API.getHeroes();
    console.log(data, 'saga');
    yield put(GetHeroesCreators.getHeroesSuccess(data.data));
  } catch (error) {
    yield put(GetHeroesCreators.getHeroesError(error));
  }
}
