import React, { Component } from "react";
import { Route } from 'react-router-dom';
import Main from './components/Main/main'
import Resume from './components/Resume/resume'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Main} />
        <Route exact path='/resume' component={Resume} />
      </div>
    );
  }
}

export default App;
