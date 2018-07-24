import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Main from './components/Main/main'
import Resume from './components/Resume/resume'
import "./App.css";

class App extends Component {
  render() {
    return (
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames='fade'
          >
            <Switch location={location}>
              <Route exact path='/' component={Main} />
              <Route exact path='/resume' component={Resume} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    );
  }
}

export default App;
