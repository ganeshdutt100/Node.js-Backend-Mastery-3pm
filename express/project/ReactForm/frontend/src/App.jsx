import { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = { name, email, username };
    await fetch('http://localhost:3000/api/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    alert("Data Saved")
    setName("")
    setUsername("")
    setEmail("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}  >
        <input type="text" placeholder='Name' name='name' value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
        <input type="text" placeholder='Username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} /> <br /> <br />
        <input type="email" name='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
