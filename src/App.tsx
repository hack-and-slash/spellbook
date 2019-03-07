import React, { Component } from 'react';
import Spells from './containers/Spells/Spells';

import './App.css';

class App extends Component {
  render() {
    return (
      <section>
        <h1>Spellbook</h1>
        <Spells />
      </section>
    );
  }
}

export default App;
