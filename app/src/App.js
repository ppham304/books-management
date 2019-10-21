import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';
import Home from './components/Home';
import store from './redux/configStore';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Switch>
              <Route path="/home" component={Home} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
