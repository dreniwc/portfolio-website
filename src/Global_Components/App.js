import React from 'react';
import '../Styles/app.scss'
import Header from "./header"
import { Switch, Route } from 'react-router-dom';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Home from '../pages/Home';
import About from '../pages/about/about';
import Portfolio from '../pages/portfolio/portfolio';
import Contact from '../pages/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames="fade"
          >
            <Switch location={location}> {/* The Switch decides which component to show based on the current URL.*/}
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/portfolio' component={Portfolio}></Route>
              <Route exact path='/contact' component={Contact}></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  );
}

export default App;
