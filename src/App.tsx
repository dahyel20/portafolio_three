import { useState } from 'react'
import './App.css'
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className='room'>
       <Spline scene="https://prod.spline.design/3Bgoe19mfz-E0JZr/scene.splinecode" />
    </div>
  );
}

export default App
