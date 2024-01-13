import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Photo from './components/Photo';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/photo' element={<Photo/>}/>
      </Routes>
    </div>
  )
}

export default App