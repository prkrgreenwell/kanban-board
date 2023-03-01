import React, {useState} from "react"

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label for="email">Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email.com" id="email"/>
      <label for="password">Password</label>
      <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="******" id="password"/>
      <button type="submit">Log In</button>
    </form>
    <button onClick={() => props.onFormSwitch('signup')}>Dont Have an account? Sign up here</button>
    </>
    
  )
}