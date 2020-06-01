import React from 'react';
import NavBar from './components/navbar';
import './App.css';
import { render } from 'react-dom';
import { Component } from 'react';
import Counters from './components/counters';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className='container'>
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
