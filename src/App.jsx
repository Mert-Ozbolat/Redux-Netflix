import React from 'react'
import Detail from './pages/detail'
import Favourites from './pages/favourites'
import Home from './pages/home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Detail />} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App