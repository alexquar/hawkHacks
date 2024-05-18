import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'
export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { dispatch } = useAuthContext()
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const user = {email, pass:password}
    console.log(user)
    const res = await fetch('https://mysite-isdc.onrender.com/users/sign_in', {
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
      <h1 className='text-center text-3xl m-3'>Login</h1>
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
      <p className="my-5 block sm:hidden">Don't have an account? Signup <Link to='/signup' className='text-accent'>here</Link>.</p>
      <button className="btn-primary">Submit</button>
    </form>
  )
}