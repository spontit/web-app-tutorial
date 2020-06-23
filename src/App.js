import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A tutorial app created by <a
          className="App-link"
          href="https://mjiang.dev"
          target="_blank"
          rel="noopener noreferrer"
          style={{textDecoration: 'none'}}
          >
            He Jiang
          </a>.
          
        </p>
        
      </header>
    </div>
  );
}

export default App;
