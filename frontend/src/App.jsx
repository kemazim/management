import Nav from './components/navBar/Nav'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CreatePost from './pages/CreatePost'
import { Toaster } from 'react-hot-toast';
import GetData from './pages/GetData';

function App() {

  return (
    <div>
      <Toaster />
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/create" element={<CreatePost />}/>
        <Route path="/records" element={<GetData />}/>
      </Routes>
    </div>
  )
}

export default App
