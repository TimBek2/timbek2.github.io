import { useState } from 'react'
import constructionBanner from './assets/under_construction.gif'
import constructionIcon from './assets/under-construction-90s.gif'
import './App.css'
import Hero from './components/hero'
import About from './components/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className='row'>
          <img src={constructionBanner} className="construction-banner" alt="Under Construction Banner" />
        </div>
        <div className='row'>
          <img src={constructionIcon} className="construction-icon" alt="Under construction icon" />
          <img src={constructionIcon} className="construction-icon" alt="Under construction icon" />
          <img src={constructionIcon} className="construction-icon" alt="Under construction icon" />
        </div>
        <div className='row'>
          <img src={constructionBanner} className="construction-banner" alt="Under Construction Banner" />
        </div>
      </div>
      <Hero />
      <About />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
