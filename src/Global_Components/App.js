import React from 'react';
import '../Styles/app.scss'
import Navbar from "./navbar"
import Main from "./main"
import Footer from "./footer"

function App() {
  return (
    <div className="App">
      <header role="banner">
        <div className="container">
          <h1>Callum Dreniw</h1>
          <Navbar />
        </div>
      </header>
      <main role="main" id="skipnav">
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
