import React, { Component } from 'react';

import { holy } from '../../spells/types';
import SpellsSearchForm from './SpellsSearchForm';

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
      {holy.map(spellLevel =>
        spellLevel
          .filter(spell =>
            spell.name.toLowerCase().includes(searchFilter.name.toLowerCase()),
          )
          .map(spell => <div key={spell.id}>{spell.name}</div>),
      )}
    </section>
  );
};

export default Spells;
