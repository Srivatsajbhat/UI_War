import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Components/Product';
import Login from './Components/Login'
import Signup from './Components/signup/Signup';
import Electronics from './Components/Electronics';
import Description from './Components/Description';
import HomeHome from './home/HomeHome';
import Contact from './Components/CONTACT/Contact';



function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/electronics" element={<Electronics/>}></Route>
        <Route path="/des" element={<Description/>}></Route>
        <Route path="/home" element={<HomeHome/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App
