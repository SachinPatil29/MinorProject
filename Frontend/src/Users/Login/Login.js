import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '' && password === '') {
      setError(true);
    }
    else {
      setSubmit(true);
      setError(false);
    }
  }

  const successMessage = () => {
    return (
      <div className="success" style={{ display: submit ? '' : 'none', }}>
        <h1>Successfully logged in!</h1>
      </div>
    )
  }

  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? '' : 'none' }}>
        <h1>Please enter all the fields</h1>
      </div>
    )
  }

  return (
    <div className='Logbody'>
      <div className='Login'>
        <h1>Login</h1>
        <div className='messages'>
          {successMessage()}
          {errorMessage()}
        </div>
        <form>
          <label className="label">Email:</label>
          <input type="email" name="uname" id="uname" placeholder='Enter Email' /> <br /><br />
          <label className="label">Password:</label>
          <input type="password" name="password" id="pwd" placeholder='Enter Password' /> <br /> <br />
          <button onClick={handleLogin}>Submit</button><br /><br />
        </form>
      </div>
    </div>
  )
}

export default Login