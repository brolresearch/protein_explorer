import React from 'react';
import { Component } from 'react';

import Header from './components/Header';
import ProteinRender from './components/ProteinRender';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './colorPalette.css';

class App extends Component {
  render() {
    return (
      <div className="App color-primary-4" >

        <div className="container">
          <Header />
          <ProteinRender />
        </div>
      </div>
    );
  }
}

export default App;
