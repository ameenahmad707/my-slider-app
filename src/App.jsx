import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Sliders from "./Sliders";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-gray-100">
      <Sliders />
    </div>
  );
}

export default App;
