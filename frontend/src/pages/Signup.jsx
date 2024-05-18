import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const { dispatch } = useAuthContext()
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const user = {email, pass:password, first_name:firstName, last_name:lastName}
    console.log(user)
    const res = await fetch('https://mysite-isdc.onrender.com/users/sign_up', {
        method:'POST',
        body : JSON.stringify(user),
        headers : {
            'Content-Type':'application/json',
            "Accept": "application/json",
        }
    })

    const json = await res.json()
console.log(json)
dispatch({ type: 'LOGIN', payload: json })

  }
  return (
    <form className='mt-10 w-1/2' onSubmit={handleSubmit}>
        <h1 className='text-center text-3xl m-3'>Signup</h1>
      <label>
        <span>First Name:</span>
        <input 
          type="text" 
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          required 
        />
      </label>
      <label>
        <span>Last Name:</span>
        <input 
          type="text" 
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
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