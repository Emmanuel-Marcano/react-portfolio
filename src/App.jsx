import { useRef } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import Container from './components/Container'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Blog from './components/Blog'

import './App.css'

function App() {

  let navBar = useRef()
  
  

  return (

    <BrowserRouter basename='/react-portfolio/'>
    <div  className="">
      <div ref={navBar} className="nav-bar"></div>
      <Container>
          <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/about' element={<About/>}/> 
            <Route path='/projects' element={<Projects/>}/> 
            <Route path='/contact' element={<Contact/>}/> 
            <Route path='/blog' element={<Blog/>}/> 
          </Routes>
          <Navigation nav={navBar}/>
       </Container>
    </div>
    </BrowserRouter>
  )
}

export default App
