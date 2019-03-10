import React, { useState } from 'react';

import { Spell } from 'src/models/spell';
import SpellSearchFilter from './models/SpellSearchFilter';
import SpellsSearchForm from './components/SpellsSearchForm';
import SpellCards from './components/SpellCards';
import SpellCarousel from './components/SpellCarousel';
import { holySpellBook, arcaneSpellBook } from 'src/spells/types';

const Spells = () => {
  const [searchFilter, setSearchFilter] = useState<SpellSearchFilter>({
    name: '',
    type: '',
  });
  const [currentSpell, setCurrentSpell] = useState<Spell | null>(null);

  const updateSearchFilter = (name: string, type: string) => {
    if (name === searchFilter.name && type === searchFilter.type) {
      return;
    }

    setSearchFilter({ name, type });
  };

  const handleCurrentSpellChange = (spell: Spell | null) => {
    setCurrentSpell(spell);
  };

  return (
    <section>
      <SpellsSearchForm updateSearchFilter={updateSearchFilter} />

      {(searchFilter.type === 'holy' || searchFilter.type === '') && (
        <SpellCards
          searchFilter={searchFilter}
          handleCurrentSpellChange={handleCurrentSpellChange}
          list={holySpellBook}
          title="Magias divinas"
        />
      )}

      {(searchFilter.type === 'arcane' || searchFilter.type === '') && (
        <SpellCards
          searchFilter={searchFilter}
          handleCurrentSpellChange={handleCurrentSpellChange}
          list={arcaneSpellBook}
          title="Magias arcanas"
        />
      )}

      {currentSpell !== null && (
        <SpellCarousel
          currentSpell={currentSpell}
          handleCurrentSpellChange={handleCurrentSpellChange}
        />
      )}
    </section>
  );
};

export default Spells;
