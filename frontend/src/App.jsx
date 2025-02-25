import Nav from './components/navBar/Nav'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CreatePost from './pages/CreatePost'
import { Toaster } from 'react-hot-toast';
import CreatePage from './pages/CreatePage';


function App() {

  return (
    <div className='h-screen overflow-y-hidden'>
      <Toaster />
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/create" element={<CreatePost />}/>
        <Route path="/records" element={<CreatePage />}/>
      </Routes>
    </div>
  )
}

export default App
