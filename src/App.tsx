import React from 'react';
import logo from './logo.svg';
import './App.css';
import { InputForm } from './InputForm';

function App() {
  const handleShowAlert = () => {
    alert("Hello react")
  }
  return (
    <div className="App">
      <header className="App-header">
        <InputForm defaultValue='system ready'></InputForm>

        {/*}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={handleShowAlert}>Show alert</button>
        */}
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
