import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import {Navigation} from './navigation';
import {Routing} from './routing';

const dbId = process.env.REACT_APP_AIRTABLE_API_TEST_DB_ID
function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <div> I am the App component {'%dbId'} </div>
          <Navigation/>
          <Routing/>
        </div>
      </div>
    </Router>
  );
}

export default App;
