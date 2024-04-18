import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import'./App.css'
import Header from './components/Header/Header'
import Mans from './components/Mans/Mans'
import Home from './components/Home/Home'
import About from './components/About/About'
import Womans from './components/Womans/Womans'
import Contakts from './components/Contacts/Contacts'

function App () {
  return (
    <BrowserRouter>
       <Header/>
       <Routes>
         <Route path='/about' element={<About/>}/>
         <Route path='/' element={<Home/>}/>
         <Route path='/womans' element={<Womans/>}/>
         <Route path='/mans' element={<Mans/>}/>
         <Route path='/contakts' element={<Contakts/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
