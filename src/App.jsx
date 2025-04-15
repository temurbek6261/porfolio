// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Header from './companents/Header/Header'
// import Banner from './companents/Banner/Banner'
import Futer from './companents/Futer/Futer'
import Home from './pages/Home/Home'  
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Banner/> */}
      <Futer />
    </>
  )
}

export default App
