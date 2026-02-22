import './App.css'
import About from './section/about'
import Education from './section/education'
import Navbar from './section/navbar'
import Projectpage from './section/projectpage'
import Skills from './section/tools'
import Experience from './section/experience'
import Positions from './section/por'
import Footer from './section/footer'

function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <Projectpage/>
      <Education/>
      <Skills/>
      <Experience/>
      <Positions/>
      <Footer/>
    </>
  )
}

export default App
