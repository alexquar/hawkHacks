import { useState } from 'react'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(email, password)
  }
  return (
    <form className='mt-10 w-1/2' onSubmit={handleSubmit}>
        <h1 className='text-center text-3xl m-3'>Signup</h1>
      <label>
        <span>User Name:</span>
        <input 
          type="text" 
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          required 
        />
      </label>
      <label>
        <span>Email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required 
        />
      </label>
      <label>
        <span>Password:</span>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required 
        />
      </label>
      <button className="btn-primary">Submit</button>
    </form>
  )
}