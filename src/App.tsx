import React, { Component } from 'react';
import { css } from 'emotion';

import Spells from 'src/containers/Spells/Spells';

const App = () => (
  <section
    className={css`
      background-color: #f4f6f8;
      padding: 20px;
      min-height: 100vh;
    `}
  >
    <Spells />
  </section>
);

export default App;
