import React from 'react';
import './app.scss';
import Hello from "./hello"
import Skills from "./skills"

function App() {
  return (
    <div className="App">
      <header>
        <h1>Callum Dreniw</h1>
      </header>
      <section>
        <p>Skills</p>
        <Skills />
      </section>
    </div>
  );
}

export default App;
