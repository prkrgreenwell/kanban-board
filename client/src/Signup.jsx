import React, {useState} from "react"

export const Signup = (props) => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
  }

  return (
   
    <>
    <form onSubmit={handleSubmit}>
      <label for='name'>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="your name" id="name"/>
      <label for="email">Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email.com" id="email"/>
      <label for="password">Password</label>
      <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="******" id="password"/>
      <button type="submit">Log In</button>
    </form>
    <button onClick={() => props.onFormSwitch('login')}>Already have an account? Log in here</button>
    </>
    
  )
}