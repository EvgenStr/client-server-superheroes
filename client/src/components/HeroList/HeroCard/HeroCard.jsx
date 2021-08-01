import React from 'react';

function HeroCard (props) {
  const { hero } = props;

  return (
    <div>
      <h3>{hero.nickName}</h3>
      <p>{hero.realName}</p>
      <p>{hero.originDescription}</p>
      <p>{hero.catchPhrase}</p>
    </div>
  );
}
export default HeroCard;
