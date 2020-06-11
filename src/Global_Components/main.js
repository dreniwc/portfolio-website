import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from "./footer"

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Home from '../pages/Home';
import About from '../pages/about/about';
import Portfolio from '../pages/portfolio/portfolio';
import Contact from '../pages/contact/Contact';

function Main() {
  return (
    <div className="wrapper">
      <main role="main" id="skipnav">
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
      </main >
    </div>
  );
}

export default Main;