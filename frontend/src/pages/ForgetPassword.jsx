import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("")
  
 
 const SubmitForm= async(e)=>{
 e.preventDefault()
 try {
    const {data} = await axios.post("http://localhost:4000/api/user/forget-password",{email})
    alert("resetLink sent on your email")
    localStorage.setItem("resetToken",data.token)
 } catch (error) {
     console.log(error)
 }
 }
  return (
    <div className='forgetPassword'>
 <div className="container">
        <form className="form w-50 mt-5" onSubmit={SubmitForm}>
           <h1 className="mt-3 text-center" >forget password</h1>
            <input type="email" className="form-control mt-2" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter email'/>          
           <button  className="btn btn-success mt-2">Send Link</button> 
        </form>
        {/* <NavLink to="/forget-password">forget Password</NavLink>
        <NavLink to="/register">Are you new user? sigUn</NavLink> */}
        </div>
    </div>
  )
}

export default ForgetPassword