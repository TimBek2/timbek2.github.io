import './App.css'
import Hero from './components/hero'
import About from './components/about'
import SkillLogos from './components/skillLogos';
import Experience from './components/experience'

function App() {
  return (
    <>
      <div className='bg-wrapper'>
        <Hero />
        <About />
      </div>
      <SkillLogos />
      <Experience />
    </>
  )
}

export default App
