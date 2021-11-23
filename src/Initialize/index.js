import React from 'react';
import Navbar from '../components/Navbar';
import Routes from '../routes';

function Initialize() {
  return (
    <div className="App container">
      <Navbar />
      <Routes />
    </div>
  );
}

export default Initialize;
