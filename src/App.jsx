import { useState } from 'react'
import AppHeader from './components/AppHeader'
import codes from './db/db.js'
function App() {
  const [active, setActive] = useState(0)

  function handleClick(e) {
    const newActive = Number(e.target.getAtttibute('data-index'))
  }

  return (
    <>
      <AppHeader />
      <div className="container">
        <div className="code">
          {linguaggi.map((item, index) => (
            <div className="code-item" key={item - id}>
              <button onClick={handleClick}></button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
