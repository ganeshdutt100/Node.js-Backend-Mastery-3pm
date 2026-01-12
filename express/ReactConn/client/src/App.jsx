import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3000/api/data')
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setData(result)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  return (
    <>

      {data ? (
        <div>
          <h2>{data.message}</h2>
          <h3>Skills :  </h3>
          <ul>
            {data.skills.map((item, index) => (
              <li key={index}  >{item}</li>
            ))}
          </ul>
          <h3>{data.success}</h3>
        </div>

      ) : (
        <h2>Loading data from server...</h2>
      )}
    </>
  )
}

export default App
