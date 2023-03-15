import React, { Suspense, lazy, useState, useEffect } from 'react';
import './App.css';
import MiniRoom from './miniRoom.jsx'
import Room from './room';

function App() {
  return (
    <div>
      <Room></Room>
      <MiniRoom />
    </div>
  );
}

export default App;