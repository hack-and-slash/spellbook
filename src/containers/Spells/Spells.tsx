import React, { Fragment } from 'react';

import { holy } from '../../spells/types';
import SpellsSearchForm from './SpellsSearchForm';
import SpellCard from './SpellCard';

const getFilteredSpells = (name: string) =>
  holy.map(spellLevel =>
    spellLevel.filter(spell =>
      spell.name.toLowerCase().includes(name.toLowerCase()),
    ),
  );

const Spells = () => {
  const [searchFilter, setSearchFilter] = React.useState({
    name: '',
    type: '',
  });

  const updateSearchFilter = (name: string, type: string) => {
    if (name === searchFilter.name && type === searchFilter.type) {
      return;
    }

    setSearchFilter({ name, type });
  };

  return (
    <section>
      <SpellsSearchForm updateSearchFilter={updateSearchFilter} />
      {getFilteredSpells(searchFilter.name).map((spellLevel, index) => (
        <Fragment>
          <h2>{index + 1}º círculo</h2>
          {spellLevel.map(spell => (
            <SpellCard key={spell.id} spell={spell} />
          ))}
        </Fragment>
      ))}
    </section>
  );
};

export default Spells;
