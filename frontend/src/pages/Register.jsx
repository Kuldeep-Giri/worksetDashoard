import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
   const [users,setUsers] = useState({
    username:"",
    email:"",
    password:"",
    confirm_password:"",
    domain:"",
    package:"",
    template_name:""
   });
   const [verify,setVerify] = useState(false)
   const handleChange = (e)=>{
    setUsers({...users,
        [e.target.name]:e.target.value}
        )
}

const SubmitForm= async(e)=>{
e.preventDefault()
try {
    const {data} = await axios.post("http://localhost:4000/api/user/register",users)
    alert("registration successfully")
    navigate("/login")
} catch (error) {
    console.log(error)
    alert("email is already exist or password not match")
}
}
function onChange(value) {
    setVerify(true)
  }
  return (
    <div className='register'>
        <div className="container">
        <form className="form w-50 mt-5" onSubmit={SubmitForm}>
           <h1 className="mt-3 text-center" >SignUp</h1>
            <input type="text" className="form-control mt-2" name='username' value={ users.username } onChange={handleChange} placeholder='enter username'/>
            <input type="text" className="form-control mt-2" name='domain' value={ users.domain } onChange={handleChange} placeholder='enter domain'/>
            <input type="text" className="form-control mt-2" name='package' value={ users.package } onChange={handleChange} placeholder='enter package'/>
            <input type="text" className="form-control mt-2" name='template_name' value={ users.template_name } onChange={handleChange} placeholder='enter template_name'/>
            <input type="email" className="form-control mt-2" name='email' value={users.email} onChange={handleChange} placeholder='enter email'/>    
            <input type="password" className="form-control mt-2" name='password' value={users.password } onChange={handleChange} placeholder='enter password'/>
            <input type="password" className="form-control mt-2" name='confirm_password' value={users.confirm_password } onChange={handleChange} placeholder='enter conpassword'/>
            <ReCAPTCHA
    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    onChange={onChange}
  />
            {
                verify === false ? <button disabled className="btn btn-success mt-2">Submit</button> :<button className="btn btn-success mt-2">Submit</button>
            }
            
        </form>
        <NavLink to="/login">Are you already user? sigIn</NavLink>
        </div>
    </div>
  )
}

export default Register