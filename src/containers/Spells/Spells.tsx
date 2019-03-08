import React, { Component } from 'react';

import { holy } from '../../spells/types';
import SpellsSearchForm from './SpellsSearchForm';

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
      {getFilteredSpells(searchFilter.name).map(spellLevel =>
        spellLevel.map(spell => <div key={spell.id}>{spell.name}</div>),
      )}
    </section>
  );
};

export default Spells;
