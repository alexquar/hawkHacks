import { useState } from 'react'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const user = {email, password}
    const res = await fetch('https://mysite-isdc.onrender.com/users/sign_in', {
        method:'POST',
        body : JSON.stringify(user),
        headers : {
            'Content-Type':'application/json',
            "Accept": "application/json",
        }
    })

    const json = await res.json()
    if(!res.ok){
        console.log(json)
    } 
    console.log('success')

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
      <button className="btn-primary">Submit</button>
    </form>
  )
}