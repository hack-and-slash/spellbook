import nanoid from 'nanoid';

import Spell from './Spell';
import holySpellBook from './holy';

const addIdToSpell = (spellBook: Spell[][]) =>
  spellBook.map((level: Spell[]) =>
    level.map((spell: Spell) => ({ ...spell, id: nanoid() })),
  );

export const holy = addIdToSpell(holySpellBook);
