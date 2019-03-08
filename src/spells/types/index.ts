import nanoid from 'nanoid';

import { Spell } from 'src/models/spell';
import holySpells from './holy';

const addIdToSpell = (spellBook: Spell[][]) =>
  spellBook.map(level => level.map(spell => ({ ...spell, id: nanoid() })));

export const holySpellBook = addIdToSpell(holySpells);
