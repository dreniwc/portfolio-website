import React from "react";
import '../Styles/app.scss'
import { Switch, Route, useLocation, NavLink } from 'react-router-dom';
import { ReactComponent as CDLogoBlack } from '../Assets/logoBlack.svg';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../Global_Components/useDarkMode"
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
  if (!mountedComponent) return <div />
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
          <header role="banner" className="borderColour">
            <div className="container">
              <div className="headerLogo_image">
                <CDLogoBlack />
              </div>
              <nav role="navigation" id="skiptonav">
                <ul>
                  <li><NavLink to='/' exact>Home</NavLink></li>
                  <li><NavLink to='/about'>About</NavLink></li>
                  <li><NavLink to='/contact'>Contact</NavLink></li>
                  <li><Toggle theme={theme} toggleTheme={themeToggler} /></li>
                </ul>
              </nav>
            </div>
          </header>
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
                  <Route path="/*" component={NoMatch}></Route>
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
