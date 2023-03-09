import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Home  from './pages/Home/Home'
import  Cart  from './pages/Cart/Cart'
import Product from './pages/Product/Product'

import NavBar from './components/NavBar'
import Footer from './components/Footer'


const App = (props) => {
  return (
    <div className='app-container'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/product/:id' element={<Product />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App