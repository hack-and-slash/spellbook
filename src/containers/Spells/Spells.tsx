import React, { useState } from 'react';

import SpellSearchFilter from './models/SpellSearchFilter';
import SpellsSearchForm from './components/SpellsSearchForm';
import SpellCards from './components/SpellCards';

const Spells = () => {
  const [searchFilter, setSearchFilter] = useState<SpellSearchFilter>({
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

      {(searchFilter.type === 'holy' || searchFilter.type === '') && (
        <SpellCards searchFilter={searchFilter} />
      )}
    </section>
  );
};

export default Spells;
