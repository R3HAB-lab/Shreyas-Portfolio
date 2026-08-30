import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Shreyas from './Components/Shreyas/shreyas'
import About from './Components/About/about'
import Certifications from './Components/Certifications/certifications'
import Projects from './Components/Projects/projects'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Shreyas/>
      <About/>
      <Certifications/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App