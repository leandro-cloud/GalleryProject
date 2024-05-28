import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Amsterdam from './components/Amsterdam';
import Berlin from './components/Berlin';
import London from './components/London';
import Madrid from './components/Madrid';
import Miami from './components/Miami';
import NewYork from './components/NewYork';
import Paris from './components/Paris';
import Roma from './components/Roma';
import Tokio from './components/Tokio';
import Viena from './components/Viena';
import Navigation from './components/Navigation';


function App() {

  return (
    <div className='bg-slate-800 h-screen p-8'>
      <Router>
        <div className='flex h-[450px] mb-8 justify-center'>
          <Routes>
            <Route path='/amsterdam' element={<Amsterdam />} />
            <Route path='/berlin' element={<Berlin />} />
            <Route path='/london' element={<London />} />
            <Route path='/madrid' element={<Madrid />} />
            <Route path='/miami' element={<Miami />} />
            <Route path='/newYork' element={<NewYork />} />
            <Route path='/paris' element={<Paris />} />
            <Route path='/roma' element={<Roma />} />
            <Route path='/tokio' element={<Tokio />} />
            <Route path='/viena' element={<Viena />} />
          </Routes>
        </div>
        <div className='h-[]'>
          <Navigation />
        </div>
      </Router>

    </ div>
  )
}

export default App
