import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DisplayData from './pages/DisplayData'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
      <nav className='fixed w-full bg-white shadow-md'>
        <Navbar />
      </nav>

      <div className='px-6 bg-gradient-to-tr from-light-blue-300 to-purple-200 '>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/display_data' element={<DisplayData />} />
        </Routes>
      </div>
    </>
  )
}

export default App