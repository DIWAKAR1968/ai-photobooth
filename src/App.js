import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Photo from './components/Photo';
import Avatar from './components/Avatar';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/photo' element={<Photo/>}/>
        <Route path='/avatar' element={<Avatar/>}/>
      </Routes>
    </div>
  )
}

export default App