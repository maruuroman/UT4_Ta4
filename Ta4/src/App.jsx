import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Aumento + Decremento</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Aumento
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decremento
        </button>
        <p>
          {count}
        </p>
      </div>
    </>
  )
}

export default App
