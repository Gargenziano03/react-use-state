import { useState } from 'react'
import AppHeader from './components/AppHeader'
import codes from './db/db.js'
function App() {
  const [active, setActive] = useState(0)

  function handleClick(e) {
    const newActive = Number(e.target.getAttibute('data-index'))
    setActive(newActive)
  }

  return (
    <>
      <AppHeader />
      <div className="container">
        <div className="code">
          {codes.map((item, index) => (
            <div className="code-item" key={item.id}>
              <button onClick={handleClick} data-index={index}> {item.nome}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
