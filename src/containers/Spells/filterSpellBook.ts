import { holySpellBook } from 'src/spells/types';

const filterSpellBook = (name: string) =>
  holySpellBook.map(spellLevel =>
    spellLevel.filter(spell =>
      spell.name.toLowerCase().includes(name.toLowerCase()),
    ),
  );

export default filterSpellBook;
