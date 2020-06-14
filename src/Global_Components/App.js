import React, { useState, useEffect } from "react";
import '../Styles/app.scss'
import Header from "./header"
import { Switch, Route } from 'react-router-dom';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import { ThemeProvider } from "styled-components";
import  {useDarkMode} from "../Global_Components/useDarkMode"
import { GlobalStyles } from "../Global_Components/globalStyles";
import { lightTheme, darkTheme } from "../Global_Components/Themes"
import Toggle from "../Global_Components/Toggler"


import Home from '../pages/Home';
import About from '../pages/about/about';
import Contact from '../pages/contact/Contact';

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
        <Toggle theme={theme} toggleTheme={themeToggler} />
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
                  <Route exact path='/contact' component={Contact}></Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
