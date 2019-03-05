import nanoid from 'nanoid';
import holySpells from './holy.json';
import arcaneSpells from './arcane.json';

const addIdToSpell = spellList =>
  spellList.map(level => level.map(spell => ({ ...spell, id: nanoid() })));

export const holy = addIdToSpell(holySpells);
export const arcane = addIdToSpell(arcaneSpells);
