import React, { useState, useEffect } from 'react';
import { css } from 'emotion';

import { Spell } from 'src/models/spell';

interface SpellCarouselProps {
  currentSpell: Spell;
  handleCurrentSpellChange(spell: null): void;
}

const SpellCarousel = (props: SpellCarouselProps) => {
  return (
    <div
      className={css`
        position: fixed;
        z-index: 10;
        background: rgba(000, 000, 000, 0.5);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        padding: 32px;
        height: 100%;
        display: flex;
        align-items: center;
      `}
    >
      <button
        className={css`
          position: absolute;
          top: 16px;
          right: 32px;
          z-index: 10;
          background: #fff;
          padding: 8px;
          border-radius: 3px;
          border: 0;
        `}
        onClick={() => props.handleCurrentSpellChange(null)}
      >
        X
      </button>
      <div
        className={css`
          background-color: #fff;
          height: calc(90vh - 64px);
          overflow-y: scroll;
          border-radius: 4px;
          padding: 16px;
          width: 100%;
        `}
        id="slide-content"
      >
        <h3>{props.currentSpell.name}</h3>
        <p
          className={css`
            font-style: italic;
            margin: 8px 0;
          `}
        >
          {props.currentSpell.stats.join(' | ')}
        </p>
        <p>{props.currentSpell.description}</p>
      </div>
    </div>
  );
};

export default SpellCarousel;
