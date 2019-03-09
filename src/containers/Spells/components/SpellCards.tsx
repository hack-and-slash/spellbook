import React, { Fragment } from 'react';

import SpellSearchFilter from '../models/SpellSearchFilter';
import SpellCard from './SpellCard';
import filterSpellBook from '../filterSpellBook';

interface SpellCardsProps {
  searchFilter: SpellSearchFilter;
}

const SpellCards = (props: SpellCardsProps) => (
  <Fragment>
    <h2>Magias divinas</h2>

    {filterSpellBook(props.searchFilter.name).map((spellLevel, index) => (
      <Fragment key={`holy-${index}`}>
        <h3>{index + 1}º círculo</h3>
        {spellLevel.map(spell => (
          <SpellCard key={spell.id} spell={spell} />
        ))}
      </Fragment>
    ))}
  </Fragment>
);

export default SpellCards;
