import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import {Navigation} from './navigation';
import {Routing} from './routing';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Navigation/>
          <Routing/>
        </div>
      </div>
    </Router>
  );
}

export default App;
