import React, { Fragment } from 'react';
import { css } from 'emotion';

import Spell from '../../spells/types/Spell';

interface SpellCardProps {
  spell: Spell;
}

const SpellCard = (props: SpellCardProps) => {
  return (
    <Fragment>
      <div
        className={css`
          padding: 16px;
          border-bottom: 1px solid #ccc;
        `}
      >
        <h3>{props.spell.name}</h3>
        <p
          className={css`
            font-style: italic;
            margin: 8px 0;
          `}
        >
          {props.spell.stats.join(' | ')}
        </p>
        <p>{props.spell.description}</p>
      </div>
    </Fragment>
  );
};

export default SpellCard;
