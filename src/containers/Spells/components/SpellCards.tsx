import React, { Fragment } from 'react';
import { css } from 'emotion';

import { Spell } from 'src/models/spell';
import SpellSearchFilter from '../models/SpellSearchFilter';
import SpellCard from './SpellCard';
import filterSpellBook from '../filterSpellBook';

interface SpellCardsProps {
  searchFilter: SpellSearchFilter;
  handleCurrentSpellChange: (spell: Spell) => any;
  list: Spell[][];
  title: string;
}

const SpellCards = (props: SpellCardsProps) => (
  <Fragment>
    <h2>{props.title}</h2>
    {filterSpellBook(props.searchFilter.name, props.list).map(
      (spellLevel, index) => (
        <Fragment key={`holy-${index}`}>
          <h3>{index + 1}º círculo</h3>

          <div
            className={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              padding: 16px;
            `}
          >
            {spellLevel.map(spell => (
              <SpellCard
                key={spell.id}
                spell={spell}
                onClick={() => props.handleCurrentSpellChange(spell)}
              />
            ))}
          </div>
        </Fragment>
      ),
    )}
  </Fragment>
);

export default SpellCards;
