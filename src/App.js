import React from 'react';
import Contacts from './components/Contacts'
import Header from './components/Header'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
        <div class="container">
          <Contacts />
      </div>
    </div>
  );
}

export default App;
