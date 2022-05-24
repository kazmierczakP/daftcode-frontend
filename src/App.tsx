import React from 'react';
import './App.css';
import { InputForm } from './InputForm';

function App() {
/*const handleShowAlert = () => {
    alert("Hello react")
  }*/
  return (
    <div className="App">
      <header className="App-header">
        <InputForm defaultValue='system ready'></InputForm>
        <a
          className="App-link"
          href="https://github.com/xkk-opps/daftcode-frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          RepoLink
        </a>
      </header>
    </div>
  );
}

export default App;
