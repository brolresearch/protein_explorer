import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePageContainer from './containers/HomePageContainer';
import ProteinRenderPageContainer from './containers/ProteinRenderPageContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './colorPalette.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App color-primary-4" >
          <Header />
          <Route exact path="/" component={
            HomePageContainer
          } />
          <Route path="/proteins" component={
            ProteinRenderPageContainer
          } />
        </div>
      </Router>
    );
  }
}

export default App;
