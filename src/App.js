import React from 'react';
import './app.scss';
import Hello from "./hello"
import Skills from "./skills"

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <header>
        <h1>Callum Dreniw</h1>
      </header>
      <section>
        <p>test</p>
        <Hello />
        <Skills />
        <p>after</p>
      </section>
    </div>
  );
}

export default App;
