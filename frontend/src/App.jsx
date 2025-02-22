import Nav from './components/navBar/Nav'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <div className='h-screen overflow-y-hidden'>
      <Nav/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </div>
  )
}

export default App
