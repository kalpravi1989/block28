
import './App.css'
import { Routes, Route } from "react-router-dom"
import Red from './components/red'
import Blue from './components/blue'
import Home from './components/home'
import NavBar from './components/navbar'
import Footer from './components/footer'
function App() {
  

  return (
    <>
     <div id="container">
     <NavBar/>
      
      <div id="main-section">
        <Routes>
          <Route path='/blue' element={<Blue/>} />
          <Route path='/red' element={<Red/>} />
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
        <Footer/>
    </div>
    </>
  )
}

export default App
