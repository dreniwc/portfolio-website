import React from 'react';
import '../Styles/app.scss'
import Main from "./main"
import Footer from "./footer"
import Header from "./header"

function App() {
  return (
    <div className="App">
      <Header />
      <main role="main" id="skipnav">
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
