import React, { Fragment } from 'react';
import { css } from 'emotion';

import { Spell } from 'src/models/spell';

interface SpellCardProps {
  spell: Spell;
}

const SpellCard = (props: SpellCardProps) => {
  return (
    <Fragment>
      <div
        className={css`
          background-color: #fff;
          padding: 16px;
          margin-bottom: 8px;
          box-shadow: 0 1px 2px 0 rgba(63, 63, 68, 0.15);
          border-radius: 3px;
          width: 100%;
          text-align: center;

          @media (min-width: 768px) {
            width: 30%;
          }
        `}
      >
        <h3>{props.spell.name}</h3>
        <small>{props.spell.stats[0]}</small>
      </div>
    </Fragment>
  );
};

export default SpellCard;
