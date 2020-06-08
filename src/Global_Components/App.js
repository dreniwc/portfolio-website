import React from 'react';
import '../Styles/app.scss'
import Navbar from "./navbar"
import Main from "./main"

function App() {
  return (
    <div className="App">
      <header role="banner">
        <h1>Callum Dreniw</h1>
        <Navbar />
      </header>
      <Main />
    </div>
  );
}

export default App;
