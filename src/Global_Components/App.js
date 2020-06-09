import React from 'react';
import '../Styles/app.scss'
import Navbar from "./navbar"
import Main from "./main"
import Footer from "./footer"

function App() {
  return (
    <div className="App">
      <header role="banner">
        <h1>Callum Dreniw</h1>
        <Navbar />
      </header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
