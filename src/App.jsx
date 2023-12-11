import React from 'react';
import './sass/App.scss';
import Form from './components/form';
 import Nav from './components/nav';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
        <Nav />
      <Form />

    </div>
  );
}

export default App;
