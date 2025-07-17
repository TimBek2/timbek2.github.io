import { useState } from 'react'
import constructionBanner from './assets/under_construction.gif'
import constructionIcon from './assets/under-construction-90s.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className='row'>
          <img src={constructionBanner} className="construction-banner" alt="Under Construction Banner" />
        </div>
        <img src={constructionIcon} className="construction-icon" alt="Under construction icon" />
        <img src={constructionIcon} className="construction-icon" alt="Under construction icon" />
        <img src={constructionIcon} className="construction-icon" alt="Under construction icon" />
        <div className='row'>
          <img src={constructionBanner} className="construction-banner" alt="Under Construction Banner" />
        </div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="coming-soon">
        Hello World
      </p>
      <p className="coming-soon">
        Check back soon to see what I've become!
      </p>
    </>
  )
}

export default App
