import React from 'react';
import Contact from './components/Contact'
import Header from './components/Header'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <Contact name="John Doe" email="jdoe@gmail.com" phone="0123-123-33" />
      <Contact name="Sarah Lober" email="slober@gmail.com" phone="333-123-33" />
    </div>
  );
}

export default App;
