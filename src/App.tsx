import './App.css'
import Navigation from './components/navigation';
import Hero from './components/hero'
import About from './components/about'
import SkillLogos from './components/skillLogos';
import Experience from './components/experience'
import Contact from './components/contact';

function App() {
  return (
    <>
      <Navigation />
      <div className='bg-wrapper'>
        <Hero />
        <About />
      </div>
      <SkillLogos />
      <Experience />
      <Contact />
    </>
  )
}

export default App
