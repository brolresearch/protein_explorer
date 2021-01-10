import React from 'react';
import Header from './components/layout/Header';
import ProteinRender from './components/ProteinRender';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container">
          <React.Fragment>
            <Header />
            <ProteinRender />
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default App;
