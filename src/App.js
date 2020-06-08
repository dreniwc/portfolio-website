import React from 'react';
import './app.scss';
import Hello from "./hello"
import Skills from "./skills"

function App() {
  return (
    <div className="App">
      <header>
        <h1>Callum Dreniw</h1>
        <h2>Web Developer, Designer And Optimisation Specialist</h2>
        <h3>Working with user experience and accessibility at the forefront of my work.</h3>
      </header>
      <section>
        <p>Skills</p>
        <Skills />
      </section>
    </div>
  );
}

export default App;
