import React from 'react'
import { Route, Routes ,useNavigate } from 'react-router-dom'
import Home from './Pages/Home/Home' ;
import About from './Pages/About/About' ;


const App = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>    
  )
}

export default App
