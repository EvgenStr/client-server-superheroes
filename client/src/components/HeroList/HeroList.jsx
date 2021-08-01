import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as getHeroCreators from '../../actions/getHeroesCreators';
import HeroCard from './HeroCard/HeroCard';

function HeroList (props) {
  const {
    heroes: { heroes, isFetching },
    getHeroesRequest,
  } = props;
  useEffect(() => {
    getHeroesRequest();
  }, []);

  console.log(heroes, isFetching, 'comp');

  const heroesCards = heroes.map(hero => (
    <HeroCard key={hero.id} hero={hero} />
  ));

  return (
    <div>
      heroes
      {!isFetching && heroesCards}
    </div>
  );
}

const mapStateToProps = props => props;
const mapDispatchToProps = dispatch => ({
  getHeroesRequest: () => dispatch(getHeroCreators.getHeroesRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
