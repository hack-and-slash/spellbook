import { Spell } from 'src/models/spell';

const filterSpellBook = (name: string, list: Spell[][]) =>
  list.map(spellLevel =>
    spellLevel.filter(spell =>
      spell.name.toLowerCase().includes(name.toLowerCase()),
    ),
  );

export default filterSpellBook;
