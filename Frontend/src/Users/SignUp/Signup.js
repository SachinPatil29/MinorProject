import React,{useState} from 'react';
import './Signup.css';

const Signup = () => {

    const [uname,setUname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [submitted,setSubmitted] = useState(false);
    const [error,setError] = useState(false);

    const handleName = (e) =>{
        setUname(e.target.value);
        setSubmitted(false);
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value);
        setSubmitted(false);
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value);
        setSubmitted(false);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(uname === '' || email === '' || password === ''){
            setError(true);
        }
        else{
            setSubmitted(true);
            setError(false)
        }
    }

    const successMessage = () =>{
        return(
            <div className="success" style={{display: submitted ? '' : 'none',}}>
                <h1>User {uname} successfully registered!</h1>
            </div>
        )
    }

    const errorMessage = () => {
        return(
            <div className="error" style={{display: error ? '' : 'none'}}>
                <h1>Please enter all the fields</h1>
            </div>
        )
    }

  return (
    <div className="form">
        <div>
            <h1>Sign Up</h1>
        </div>
        <div className='messages'>
            {successMessage()}
            {errorMessage()}
        </div>
        <div>
            <form>
                <label className="label">Username:</label>
                <input type="text" className='input' placeholder="Enter Username" value={uname} onChange={handleName}/> <br /> <br />
                <label className="label">Email:</label>
                <input type="email" className='input' placeholder="Enter email" value={email} onChange={handleEmail}/> <br /><br />
                <label className="label">Password:</label>
                <input type="password" className='input' placeholder="Enter password" value={password} onChange={handlePassword} /> <br /><br />
                <button onClick={handleSubmit} type="submit" className="btn">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Signup