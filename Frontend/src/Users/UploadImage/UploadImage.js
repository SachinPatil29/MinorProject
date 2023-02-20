import React, { useState } from 'react';
import '../UploadImage/UploadImage.css';

const UploadImage = () => {

    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    const [file,setFile] = useState();
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    // const [imageURLs,setImageURLs] = useState([])

    function handleImageChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleFname = (e) =>{
        setFname(e.target.value);
        setSubmitted(false);
    }

    const handleLname = (e) =>{
        setLname(e.target.value);
        setSubmitted(false);
    }

    const handleAge = (e) =>{
        setAge(e.target.value);
        setSubmitted(false);
    }

    const handleGender = (e) =>{
        setGender(e.target.value);
        setSubmitted(false);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(fname ==='' || lname==='' || age==='' || gender==='select'){
            // setError(true);
            alert("please enter all the fields")
        }
        // else{
        //     setSubmitted(true);
        //     setError(false);
        // }
    }

    const errorMessage = () => {
        return(
            <div className="error" style={{display: error ? '' : 'none'}}>
                <h1>Please enter all the fields</h1>
            </div>
        )
    }

    
  return (
    <div className='body'>
        <h1>Enter the Patient Details</h1>
        <div className='messages'>
            {errorMessage()}
        </div>
        <div>
            <form>
                <label className='label'>Firstname:
                <input type="text" name="fname" id="fname" placeholder='Enter first name' value={fname} onChange={handleFname}/> </label><br />
                <label className='label'>Lastname:
                <input type="text" name="lname" id="lname" placeholder='Enter last name' value={lname} onChange={handleLname} /> </label> <br />
                <label className='label'>Age:
                <input type="text" name="age" id="age" placeholder='Enter age' value={age} onChange={handleAge} /></label> <br />
                <label className='label'>Gender:
                <select name="gender" id="gender" value={gender} onChange={handleGender}>
                    <option value="select">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select> </label><br /> <br /> <br />
                <div className='preview'>
                <input type="file" accept="image/*" onChange={handleImageChange} required/> <br />
                <img src={file} width={"40%"} height={"50%"}/>
                </div>
                <button className='btn' type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default UploadImage