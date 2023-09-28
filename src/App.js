// src/App.js

import React from 'react';
import logo from './BiddleLogo.png'; // Import your logo image
import WaitlistWidget from './WaitlistWidget'; // Import the WaitlistWidget component
import './App.css';

function App() {
  return (
    <div className="App">
     <header>
     <img src={logo} alt="Logo" className="custom-logo" />
     </header>
       
      
      <div>
      <WaitlistWidget />
      </div>
     
    </div>
  );
}

export default App;
