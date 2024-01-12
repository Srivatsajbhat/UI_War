import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Components/Product';
import Login from './Components/Login'
import Signup from './Components/signup/Signup';
import Electronics from './Components/Elecronics';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/electronics" elements={<Electronics/>}></Route>
        
      </Routes>
    </Router>
    </div>
  )
}

export default App
