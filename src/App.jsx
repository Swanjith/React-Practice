import React from 'react';
import Background from './Components/Background';
import Foreground from './Components/Foreground';

function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Foreground />
      
      <div className="fixed z-[2] w-full h-full bg-zinc-900/50"></div>
    </div>
  );
}

export default App;
