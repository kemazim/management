import { useState } from 'react'
import Nav from './components/navBar/Nav'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <div>
      <Nav/>

      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </div>
  )
}

export default App
