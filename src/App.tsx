import React, { Component } from 'react';
import Welcome from './containers/Welcome/Welcome';

class App extends Component {
  render() {
    return (
      <section>
        <h1>Spellbook</h1>
        <Welcome />
      </section>
    );
  }
}

export default App;
