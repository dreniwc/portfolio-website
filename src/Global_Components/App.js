import React from "react";
import '../Styles/app.scss'
import Header from "./header"
import { Switch, Route, useLocation } from 'react-router-dom';

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

import userAbout from "../aboutMe.json"

function App() {
  const user = userAbout;
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if(!mountedComponent) return <div/>
  function NoMatch() {
    let location = useLocation();
  
    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
        <Toggle theme={theme} toggleTheme={themeToggler} />
          <Header user={user} />
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={300}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route exact path='/' component={() => (<Home user={user} />)}></Route>
                  <Route path='/about' component={() => (<About user={user} />)} ></Route>
                  <Route path='/contact' component={Contact} ></Route>
                  <Route component={NoMatch} />
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
